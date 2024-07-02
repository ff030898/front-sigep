'use client';

import React, { useState } from 'react';
import {
  ChakraProvider, Box, VStack, Text, Button, Center, FormControl, FormLabel,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Link, Image
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefoneCelular: z.string().min(1, "Telefone celular é obrigatório"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").min(1, "Senha é obrigatória"),
  confirmaSenha: z.string().min(6, "Confirmação de senha deve ter pelo menos 6 caracteres").min(1, "Confirmação de senha é obrigatória"),
}).refine(data => data.senha === data.confirmaSenha, {
  message: "As senhas devem ser iguais",
  path: ["confirmaSenha"],
});

type FormData = z.infer<typeof schema>;

const CadastroCandidato: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const onSubmit = async (data: FormData) => {
    console.log("Enviando dados para o backend:", data);

    try {
      const response = await axios.post("http://[::1]:3001/candidatos", data, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoxLCJpYXQiOjE3MTk1MTg0NjQsImV4cCI6MTcxOTUyNDQ2NH0.P2fF5DWz6KuvKJNeJ6XD0edVEM8gc87hBv63r8K8xbE',
          'Content-Type': 'application/json'
        }
      });
      setModalTitle('Sucesso');
      setModalMessage(`Cadastro realizado com sucesso! ID do candidato: ${response.data.id}`);
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
          height={{ base: "50%", md: "100%" }}
          bg="white"
          p={8}
          boxShadow="lg"
        >
          <VStack spacing={4} align="stretch" width="100%" maxWidth="400px" as="form" onSubmit={handleSubmit(onSubmit)}>
            <Center flexDirection="column">
              <Text fontSize={{ base: "sm", md: "md" }} fontWeight="normal" textAlign="center">Bem vindo a Guiari!</Text>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign="center">Crie sua conta</Text>
            </Center>
            <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center">Já tem uma conta? <Link color="blue.500" href="#">Entrar</Link></Text>

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
            <FormControl isInvalid={!!errors.senha}>
              <FormLabel>Senha</FormLabel>
              <Input type="password" placeholder="Senha" {...register("senha")} />
              <Text color="red.500">{errors.senha?.message}</Text>
            </FormControl>
            <FormControl isInvalid={!!errors.confirmaSenha}>
              <FormLabel>Confirmação de Senha</FormLabel>
              <Input type="password" placeholder="Confirmação de Senha" {...register("confirmaSenha")} />
              <Text color="red.500">{errors.confirmaSenha?.message}</Text>
            </FormControl>

            <Button colorScheme="orange" type="submit" width="100%">
              Criar Conta
            </Button>
            <Text fontSize={{ base: "xx-small", md: "xs" }} textAlign="center" mt={4}>
              Ao usar este site, você concorda com nossos <Link color="blue.500" href="#">Termos de Serviço</Link> e <Link color="blue.500" href="#">Política de Privacidade</Link>.
            </Text>
            <Box mt={{ base: 6, md: 10 }} /> {/* Espaço adicional entre o botão e o texto */}
          </VStack>
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

export default CadastroCandidato;
