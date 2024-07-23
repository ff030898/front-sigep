'use client';

import React from 'react';
import {
  VStack, Center, Text, Button, FormControl, FormLabel, Input, Link, Image, Divider, HStack
} from "@chakra-ui/react";
import { FieldErrors } from 'react-hook-form';

interface FormComponentProps {
  tipo: string;
  onSubmit: (data: any) => void;
  errors: FieldErrors;
  register: any;
  handleSubmit: any;
}

const FormComponent: React.FC<FormComponentProps> = ({ tipo, onSubmit, errors, register, handleSubmit }) => (
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
    {tipo === "candidato" ? (
      <>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>E-mail</FormLabel>
          <Input placeholder="exemplo@gmail.com" {...register("email")} />
          {errors.email && <Text color="red.500">{errors.email.message?.toString()}</Text>}
        </FormControl>
        <FormControl isInvalid={!!errors.senha}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" placeholder="********" {...register("senha")} />
          {errors.senha && <Text color="red.500">{errors.senha.message?.toString()}</Text>}
        </FormControl>
      </>
    ) : (
      <>
        <FormControl isInvalid={!!errors.corporateEmail}>
          <FormLabel>E-mail corporativo</FormLabel>
          <Input placeholder="exemplo@empresa.com" {...register("corporateEmail")} />
          {errors.corporateEmail && <Text color="red.500">{errors.corporateEmail.message?.toString()}</Text>}
        </FormControl>
        <FormControl isInvalid={!!errors.corporatePassword}>
          <FormLabel>Senha corporativa</FormLabel>
          <Input type="password" placeholder="********" {...register("corporatePassword")} />
          {errors.corporatePassword && <Text color="red.500">{errors.corporatePassword.message?.toString()}</Text>}
        </FormControl>
      </>
    )}
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
