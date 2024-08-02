'use client';

import React from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Flex,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import NavegacaoEtapas from './NavegacaoEtapas';

const schema = z.object({
  numeroCtps: z.string().nonempty('Número CTPS é obrigatório'),
  serie: z.string().nonempty('Série é obrigatória'),
  ufEmissao: z.string().nonempty('UF de emissão é obrigatória'),
  dataCtps: z.string().nonempty('Data CTPS é obrigatória'),
  pis: z.string().nonempty('PIS é obrigatório'),
});

interface Etapa2Props {
  proximaEtapa: () => void;
  etapaAnterior: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

const Etapa2: React.FC<Etapa2Props> = ({ proximaEtapa, etapaAnterior, setStep, currentStep }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    proximaEtapa();
  };

  return (
    <Flex justifyContent="center" p={4}>
      <Box width="738px">
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontWeight="bold">Cadastrar funcionário</Heading>
          <NavegacaoEtapas currentStep={currentStep} setStep={setStep} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <HStack spacing={4}>
              <FormControl isInvalid={!!errors.numeroCtps}>
                <FormLabel>Número CTPS</FormLabel>
                <Controller
                  name="numeroCtps"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
                <FormErrorMessage>{errors.numeroCtps?.message as string}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.serie}>
                <FormLabel>Série</FormLabel>
                <Controller
                  name="serie"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
                <FormErrorMessage>{errors.serie?.message as string}</FormErrorMessage>
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl isInvalid={!!errors.ufEmissao}>
                <FormLabel>UF emissão</FormLabel>
                <Controller
                  name="ufEmissao"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de UF */}</Select>}
                />
                <FormErrorMessage>{errors.ufEmissao?.message as string}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.dataCtps}>
                <FormLabel>Data CTPS</FormLabel>
                <Controller
                  name="dataCtps"
                  control={control}
                  render={({ field }) => <Input {...field} type="date" />}
                />
                <FormErrorMessage>{errors.dataCtps?.message as string}</FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={!!errors.pis}>
              <FormLabel>PIS</FormLabel>
              <Controller
                name="pis"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <FormErrorMessage>{errors.pis?.message as string}</FormErrorMessage>
            </FormControl>
            <Flex justifyContent="space-between" mt={4}>
              <Button onClick={etapaAnterior} variant="outline" colorScheme="gray">Voltar</Button>
              <Button type="submit" colorScheme="orange">Próximo</Button>
            </Flex>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa2;
