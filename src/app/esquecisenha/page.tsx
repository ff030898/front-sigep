'use client';

import React from 'react';
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
  Image
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  email: string;
}

// Configuração do Axios
axios.defaults.baseURL = 'http://localhost:3001'; // URL do seu backend
axios.defaults.withCredentials = true; // Inclui cookies nas solicitações

const RecuperacaoSenha: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('/auth/forgot-password', {
        email: data.email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Link de recuperação enviado:', response.data);
    } catch (error) {
      console.error('Erro ao enviar link de recuperação:', error);
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
        >
          <Stack spacing={8} width="100%" maxW="md">
            <Stack spacing={4} textAlign="left">
              <Heading as="h1" size="lg">
                Esqueci minha senha
              </Heading>
              <Text fontSize="md">
                Não se preocupe, vamos enviar um e-mail de recuperação para você.
              </Text>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={6}>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>E-mail de recuperação</FormLabel>
                  <Input
                    type="email"
                    placeholder="exemplo@gmail.com"
                    {...register('email', { required: 'E-mail é obrigatório' })}
                  />
                  {errors.email && (
                    <Text color="red.500" fontSize="sm">
                      {errors.email.message?.toString()}
                    </Text>
                  )}
                </FormControl>
                <Button type="submit" colorScheme="orange" width="full">
                  Enviar link
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
            src="/imagens/esquisenha.png" 
            alt="Imagem de recuperação de senha"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default RecuperacaoSenha;
