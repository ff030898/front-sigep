'use client';

import React from 'react';
import {
  Box,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import NavegacaoEtapas from './NavegacaoEtapas';

const schema = z.object({
  observacoes: z.string().optional(),
});

interface Etapa3Props {
  finalizarCadastro: () => void;
  etapaAnterior: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

const Etapa3: React.FC<Etapa3Props> = ({ finalizarCadastro, etapaAnterior, setStep, currentStep }) => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    finalizarCadastro();
  };

  return (
    <Flex justifyContent="center" p={4}>
      <Box width="738px">
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontWeight="bold">Cadastrar funcionário</Heading>
          <NavegacaoEtapas currentStep={currentStep} setStep={setStep} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Observações</FormLabel>
              <Controller
                name="observacoes"
                control={control}
                render={({ field }) => <Textarea {...field} placeholder="Insira suas observações" />}
              />
            </FormControl>
            <Flex justifyContent="space-between" mt={4}>
              <Button onClick={etapaAnterior} variant="outline" colorScheme="gray">Voltar</Button>
              <Button type="submit" colorScheme="orange">Finalizar</Button>
            </Flex>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa3;
