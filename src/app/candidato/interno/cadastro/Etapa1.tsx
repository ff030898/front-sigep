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
  HStack,
  Select,
  Flex,
  Heading,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import NavegacaoEtapas from './NavegacaoEtapas';

const schema = z.object({
  cargo: z.string().nonempty('Cargo é obrigatório'),
  categoriaSalarial: z.string().nonempty('Categoria salarial é obrigatória'),
  tipoFuncionario: z.string().nonempty('Tipo de funcionário é obrigatório'),
  jornadaTrabalho: z.string().nonempty('Jornada de trabalho é obrigatória'),
  turno: z.string().nonempty('Turno é obrigatório'),
  inicio: z.string().nonempty('Início é obrigatório'),
  fim: z.string().nonempty('Fim é obrigatório'),
  situacao: z.string().nonempty('Situação é obrigatória'),
  dataAdmissao: z.string().nonempty('Data de admissão é obrigatória'),
  salario: z.string().nonempty('Salário é obrigatório'),
});

interface Etapa1Props {
  proximaEtapa: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

const Etapa1: React.FC<Etapa1Props> = ({ proximaEtapa, setStep, currentStep }) => {
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
              <FormControl isInvalid={!!errors.cargo}>
                <FormLabel>Cargo</FormLabel>
                <Controller
                  name="cargo"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de Cargo */}</Select>}
                />
                <FormErrorMessage>{errors.cargo?.message?.toString()}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.categoriaSalarial}>
                <FormLabel>Categoria salarial</FormLabel>
                <Controller
                  name="categoriaSalarial"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de Categoria Salarial */}</Select>}
                />
                <FormErrorMessage>{errors.categoriaSalarial?.message?.toString()}</FormErrorMessage>
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl isInvalid={!!errors.tipoFuncionario}>
                <FormLabel>Tipo de funcionário</FormLabel>
                <Controller
                  name="tipoFuncionario"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de Tipo de Funcionário */}</Select>}
                />
                <FormErrorMessage>{errors.tipoFuncionario?.message?.toString()}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.jornadaTrabalho}>
                <FormLabel>Jornada de trabalho</FormLabel>
                <Controller
                  name="jornadaTrabalho"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de Jornada de Trabalho */}</Select>}
                />
                <FormErrorMessage>{errors.jornadaTrabalho?.message?.toString()}</FormErrorMessage>
              </FormControl>
            </HStack>
            <HStack spacing={4}>
              <FormControl isInvalid={!!errors.turno}>
                <FormLabel>Turno</FormLabel>
                <Controller
                  name="turno"
                  control={control}
                  render={({ field }) => <Select {...field} placeholder="Selecionar">{/* Opções de Turno */}</Select>}
                />
                <FormErrorMessage>{errors.turno?.message?.toString()}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.inicio}>
                <FormLabel>Início</FormLabel>
                <Controller
                  name="inicio"
                  control={control}
                  render={({ field }) => <Input {...field} type="time" />}
                />
                <FormErrorMessage>{errors.inicio?.message?.toString()}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.fim}>
                <FormLabel>Fim</FormLabel>
                <Controller
                  name="fim"
                  control={control}
                  render={({ field }) => <Input {...field} type="time" />}
                />
                <FormErrorMessage>{errors.fim?.message?.toString()}</FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={!!errors.situacao}>
              <FormLabel>Situação</FormLabel>
              <Controller
                name="situacao"
                control={control}
                render={({ field }) => (
                  <RadioGroup {...field}>
                    <HStack spacing={4}>
                      <Radio value="ativo">Ativo</Radio>
                      <Radio value="inativo">Inativo</Radio>
                      <Radio value="desligado">Desligado</Radio>
                    </HStack>
                  </RadioGroup>
                )}
              />
              <FormErrorMessage>{errors.situacao?.message?.toString()}</FormErrorMessage>
            </FormControl>
            <HStack spacing={4}>
              <FormControl isInvalid={!!errors.dataAdmissao}>
                <FormLabel>Data da admissão</FormLabel>
                <Controller
                  name="dataAdmissao"
                  control={control}
                  render={({ field }) => <Input {...field} type="date" />}
                />
                <FormErrorMessage>{errors.dataAdmissao?.message?.toString()}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.salario}>
                <FormLabel>Salário (R$)</FormLabel>
                <Controller
                  name="salario"
                  control={control}
                  render={({ field }) => <Input {...field} type="number" />}
                />
                <FormErrorMessage>{errors.salario?.message?.toString()}</FormErrorMessage>
              </FormControl>
            </HStack>
            <Flex justifyContent="space-between" mt={4}>
              <Button variant="outline" colorScheme="gray">Cancelar</Button>
              <Button type="submit" colorScheme="orange">Próximo</Button>
            </Flex>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa1;
