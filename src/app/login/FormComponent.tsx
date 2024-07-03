'use client';

import React from 'react';
import {
  VStack, Center, Text, Button, FormControl, FormLabel, Input, Link, Image, Divider, HStack
} from "@chakra-ui/react";

const FormComponent: React.FC<{ tipo: string, onSubmit: (data: any) => void, errors: any, register: any, handleSubmit: any }> = ({ tipo, onSubmit, errors, register, handleSubmit }) => (
  <VStack spacing={4} align="stretch" width="100%" maxWidth="400px" as="form" onSubmit={handleSubmit(onSubmit)}>
    <Center flexDirection="column">
      <Text fontSize={{ base: "sm", md: "md" }} fontWeight="normal" textAlign="center">Bem vindo a Guiari!</Text>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign="center">Acesse sua conta</Text>
    </Center>
    <Button colorScheme="red" width="100%" leftIcon={<Image src="/imagens/googleLogo.png" alt="Google" />}>
      Entrar com Google
    </Button>
    {tipo === "candidato" && (
      <Button colorScheme="blue" width="100%" leftIcon={<Image src="/imagens/linkeLogo.png" alt="LinkedIn" />}>
        Entrar com LinkedIn
      </Button>
    )}
    <HStack width="100%" alignItems="center">
      <Divider />
      <Text fontSize="sm" whiteSpace="nowrap" color="gray.500">ou entre com seu email</Text>
      <Divider />
    </HStack>
    <FormControl isInvalid={!!errors.email}>
      <FormLabel>{tipo === "candidato" ? "E-mail" : "E-mail corporativo"}</FormLabel>
      <Input placeholder="exemplo@gmail.com" {...register("email")} />
      <Text color="red.500">{errors.email?.message}</Text>
    </FormControl>
    <FormControl isInvalid={!!errors.senha}>
      <FormLabel>Senha</FormLabel>
      <Input type="password" placeholder="********" {...register("senha")} />
      <Text color="red.500">{errors.senha?.message}</Text>
    </FormControl>
    <Button colorScheme="orange" type="submit" width="100%">Entrar</Button>
    <Text fontSize={{ base: "xs", md: "sm" }} textAlign="center">
      Não tem uma conta? <Link color="blue.500" href={tipo === "candidato" ? "http://localhost:4000/cadastro/candidato" : "http://localhost:4000/cadastro/empresa"}>Cadastre-se</Link>
    </Text>
    <Text fontSize={{ base: "xx-small", md: "xs" }} textAlign="center" mt={4}>
      Ao usar este site, você concorda com nossos <Link color="blue.500" href="#">Termos de Serviço</Link> e <Link color="blue.500" href="#">Política de Privacidade</Link>.
    </Text>
  </VStack>
);

export default FormComponent;
