'use client';

import React, { useState } from 'react';
import {
  ChakraProvider, Box, VStack, Text, Button, Center, FormControl, FormLabel,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Link as ChakraLink, Image, Flex
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import NextLink from 'next/link';

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefoneCelular: z.string().min(1, "Telefone celular é obrigatório"),
  cnpj: z.string().min(1, "CNPJ é obrigatório"),
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  senha: z.string().min(8, "Senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "Senha deve ter pelo menos uma letra maiúscula")
    .regex(/[!@#$%^&*]/, "Senha deve ter pelo menos um caractere especial"),
  confirmaSenha: z.string().min(8, "Confirmação de senha deve ter pelo menos 8 caracteres").min(1, "Confirmação de senha é obrigatória"),
}).refine(data => data.senha === data.confirmaSenha, {
  message: "As senhas devem ser iguais",
  path: ["confirmaSenha"],
});

type FormData = z.infer<typeof schema>;

const CadastroEmpresa: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const onSubmit = async (data: FormData) => {
    console.log("Enviando dados para o backend:", data);

    try {
      const response = await axios.post("http://[::1]:3001/empresas", data, {});
      setModalTitle('Sucesso');
      setModalMessage(`Cadastro realizado com sucesso! ID da empresa: ${response.data.id}`);
      onOpen();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Erro ao enviar dados:", error.response?.data || error.message);
      } else {
        console.error("Erro desconhecido:", error);
      }
      setModalTitle('Erro');
      setModalMessage('Falha ao realizar o cadastro.');
      onOpen();
    }
  };

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} width="100vw" height="100vh">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={{ base: "100%", md: "50%" }}
          bg="white"
          p={{ base: 4, md: 8 }}
          boxShadow="lg"
          minHeight="100vh"
        >
          <VStack spacing={4} align="stretch" width="100%" maxWidth="400px" as="form" onSubmit={handleSubmit(onSubmit)}>
            <Center flexDirection="column" mt={{ base: 4, md: 0 }}>
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="normal" textAlign="center">Bem vindo a Guiari!</Text>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign="center">Crie sua conta</Text>
            </Center>
            <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center">
              Já tem uma conta? <ChakraLink as={NextLink} color="blue.500" href="http://localhost:4000/login">Entrar</ChakraLink>
            </Text>

            <FormControl isInvalid={!!errors.nome}>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Seu nome completo" {...register("nome")} />
              <Text color="red.500">{errors.nome?.message}</Text>
            </FormControl>
            <FormControl isInvalid={!!errors.telefoneCelular}>
              <FormLabel>Telefone celular</FormLabel>
              <Input placeholder="+55 11 9 38889-2222" {...register("telefoneCelular")} />
              <Text color="red.500">{errors.telefoneCelular?.message}</Text>
            </FormControl>
            <FormControl isInvalid={!!errors.cnpj}>
              <FormLabel>CNPJ</FormLabel>
              <Input placeholder="00.000.000/0000-00" {...register("cnpj")} />
              <Text color="red.500">{errors.cnpj?.message}</Text>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder="exemplo@gmail.com" {...register("email")} />
              <Text color="red.500">{errors.email?.message}</Text>
            </FormControl>
            <FormControl isInvalid={!!errors.senha}>
              <FormLabel>Senha</FormLabel>
              <Input type="password" placeholder="Insira uma senha" {...register("senha")} />
              <Text color="red.500">{errors.senha?.message}</Text>
            </FormControl>
            <Box bg="gray.800" color="white" p={3} borderRadius="md" mb={4}>
              <Text>- A senha deve ter no mínimo 8 caracteres.</Text>
              <Text>- Pelo menos uma letra maiúscula (A-Z).</Text>
              <Text>- Pelo menos um caractere especial (por exemplo: !, @, #, $, %, ^, &, *).</Text>
            </Box>
            <FormControl isInvalid={!!errors.confirmaSenha}>
              <FormLabel>Confirmação de Senha</FormLabel>
              <Input type="password" placeholder="Confirme sua senha" {...register("confirmaSenha")} />
              <Text color="red.500">{errors.confirmaSenha?.message}</Text>
            </FormControl>

            <Button colorScheme="orange" type="submit" width="100%">
              Criar Conta
            </Button>
            <Text fontSize={{ base: "xx-small", md: "xs" }} textAlign="center" mt={4} mb={4}>
              Ao usar este site, você concorda com nossos <ChakraLink as={NextLink} color="blue.500" href="#">Termos de Serviço</ChakraLink> e <ChakraLink as={NextLink} color="blue.500" href="#">Política de Privacidade</ChakraLink>.
            </Text>
          </VStack>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          height={{ base: "40vh", md: "100vh" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="orange.100"
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src="/imagens/frameLateralCadastro.png"
            alt="Image"
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalMessage}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default CadastroEmpresa;
