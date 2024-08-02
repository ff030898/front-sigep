'use client';

import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

// Configuração do Axios
axios.defaults.baseURL = 'http://localhost:3001'; // URL do seu backend
axios.defaults.withCredentials = true; // Inclui cookies nas solicitações

const RedefinirSenha: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (data.newPassword !== data.confirmPassword) {
      console.error('As senhas não coincidem');
      return;
    }
    try {
      const response = await axios.post('/auth/reset-password', {
        password: data.newPassword,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Senha redefinida com sucesso:', response.data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box display="flex" width="100vw" height="100vh" flexDirection={{ base: "column", md: "row" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={{ base: "100%", md: "50%" }}
          height={{ base: "auto", md: "100%" }}
          bg="white"
          p={8}
          boxShadow="lg"
          mx="auto"
        >
          <Stack spacing={8} width="100%" maxW="md">
            <Stack spacing={4} textAlign="left">
              <Heading as="h1" size="lg">
                Redefinir senha
              </Heading>
              <Text fontSize="md">
                Digite e confirme a sua nova senha, para salvar as alterações.
              </Text>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={6}>
                <FormControl isInvalid={!!errors.newPassword}>
                  <FormLabel>Nova senha</FormLabel>
                  <Input
                    type="password"
                    placeholder="Digite sua nova senha"
                    {...register('newPassword', { required: 'Nova senha é obrigatória' })}
                  />
                  {errors.newPassword && (
                    <Text color="red.500" fontSize="sm">
                      {errors.newPassword.message?.toString()}
                    </Text>
                  )}
                </FormControl>
                <FormControl isInvalid={!!errors.confirmPassword}>
                  <FormLabel>Confirmar senha</FormLabel>
                  <Input
                    type="password"
                    placeholder="Confirme sua nova senha"
                    {...register('confirmPassword', { required: 'Confirmação de senha é obrigatória' })}
                  />
                  {errors.confirmPassword && (
                    <Text color="red.500" fontSize="sm">
                      {errors.confirmPassword.message?.toString()}
                    </Text>
                  )}
                </FormControl>
                <Button type="submit" colorScheme="orange" width="full">
                  Redefinir senha
                </Button>
                <Button
                  variant="outline"
                  colorScheme="orange"
                  width="full"
                  onClick={() => window.location.href = '/login'} // Altere para a rota de login
                >
                  Voltar para login
                </Button>
              </Stack>
            </form>
            {isSuccess && (
              <Alert status="success" mt={4}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Senha redefinida com sucesso!</AlertTitle>
                  <AlertDescription>
                    Vá para o login e utilize seu novo acesso.
                  </AlertDescription>
                </Box>
              </Alert>
            )}
          </Stack>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          height={{ base: "50%", md: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="orange.100"
        >
          <Image
            src="/imagens/recuperarsenha.png" 
            alt="Imagem de redefinir senha"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default RedefinirSenha;
