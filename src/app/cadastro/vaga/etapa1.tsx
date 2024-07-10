"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Switch,
  Flex,
  Heading,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import CurrencyInput from 'react-currency-input-field';
import NavegacaoEtapas from './navegacaoEtapas';

interface Etapa1Props {
  proximaEtapa: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

const Etapa1: React.FC<Etapa1Props> = ({ proximaEtapa, setStep, currentStep }) => {
  const { handleSubmit } = useForm();
  const [salarioMin, setSalarioMin] = useState<string | undefined>('');
  const [salarioMax, setSalarioMax] = useState<string | undefined>('');
  const [pcd, setPcd] = useState<boolean>(false);
  const [deficiencias, setDeficiencias] = useState<string[]>([]);

  const onSubmit = (data: any) => {
    console.log({ salarioMin, salarioMax, pcd, deficiencias });
    proximaEtapa();
  };

  const handlePcdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPcd(event.target.checked);
  };

  const handleDeficienciaChange = (deficiencia: string) => {
    if (deficiencias.includes(deficiencia)) {
      setDeficiencias(deficiencias.filter(d => d !== deficiencia));
    } else {
      setDeficiencias([...deficiencias, deficiencia]);
    }
  };

  return (
    <Flex justifyContent="center" p={4}>
      <Box width="738px">
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontWeight="bold">
            Cadastrar Vaga
          </Heading>
          <NavegacaoEtapas currentStep={currentStep} setStep={setStep} />

          <FormControl>
            <FormLabel>Cargo</FormLabel>
            <Input placeholder="Digite o cargo" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Número de posições</FormLabel>
            <NumberInput defaultValue={1} min={1} width="738px" height="48px" gap="0px">
              <NumberInputField width="738px" height="48px" gap="0px" opacity="0px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Flex alignItems="center">
            <Text mr={2}>Cargo exclusivo para PCD</Text>
            <Switch
              size="md"
              isChecked={pcd}
              onChange={handlePcdChange}
              colorScheme="blue"
              width="34px"
              height="20px"
              padding="2px 0 0 0"
              gap="0px"
              borderRadius="9999px"
            />
          </Flex>

          <FormControl>
            <FormLabel>Tipo de deficiência</FormLabel>
            <Stack spacing={2}>
              <Flex alignItems="center">
                <Checkbox
                  id="fisica"
                  isChecked={deficiencias.includes('fisica')}
                  onChange={() => handleDeficienciaChange('fisica')}
                  borderRadius="full"
                  colorScheme="blue"
                />
                <FormLabel htmlFor="fisica" mb="0" ml={2}>
                  Física
                </FormLabel>
              </Flex>
              <Flex alignItems="center">
                <Checkbox
                  id="auditiva"
                  isChecked={deficiencias.includes('auditiva')}
                  onChange={() => handleDeficienciaChange('auditiva')}
                  borderRadius="full"
                  colorScheme="blue"
                />
                <FormLabel htmlFor="auditiva" mb="0" ml={2}>
                  Auditiva
                </FormLabel>
              </Flex>
              <Flex alignItems="center">
                <Checkbox
                  id="visual"
                  isChecked={deficiencias.includes('visual')}
                  onChange={() => handleDeficienciaChange('visual')}
                  borderRadius="full"
                  colorScheme="blue"
                />
                <FormLabel htmlFor="visual" mb="0" ml={2}>
                  Visual
                </FormLabel>
              </Flex>
              <Flex alignItems="center">
                <Checkbox
                  id="mental"
                  isChecked={deficiencias.includes('mental')}
                  onChange={() => handleDeficienciaChange('mental')}
                  borderRadius="full"
                  colorScheme="blue"
                />
                <FormLabel htmlFor="mental" mb="0" ml={2}>
                  Mental
                </FormLabel>
              </Flex>
            </Stack>
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de contratação</FormLabel>
            <Select placeholder="Selecione" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Tipo de trabalho</FormLabel>
            <Select placeholder="Selecione" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Nível de experiência</FormLabel>
            <Select placeholder="Selecione" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Nível hierárquico</FormLabel>
            <Select placeholder="Selecione" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Local de trabalho</FormLabel>
            <Select placeholder="Selecione" width="738px" height="48px" />
          </FormControl>

          <FormControl>
            <FormLabel>Faixa salarial (R$)</FormLabel>
            <Box
              width="366px"
              height="166px"
              p="24px 0 0 0"
              gap="38px"
              borderRadius="6px"
              border="1px solid #E2E8F0"
              background="#FFFFFF"
              boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)"
            >
              <Flex justifyContent="space-between" px={4}>
                <Box>
                  <Text mb={2}>De</Text>
                  <CurrencyInput
                    id="salarioMin"
                    name="salarioMin"
                    placeholder="R$: 0"
                    value={salarioMin}
                    decimalsLimit={2}
                    decimalSeparator=","
                    groupSeparator="."
                    onValueChange={(value) => setSalarioMin(value)}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    style={{ width: '160px', height: '48px', padding: '8px' }}
                    fixedDecimalLength={2}
                  />
                </Box>
                <Box>
                  <Text mb={2}>Até</Text>
                  <CurrencyInput
                    id="salarioMax"
                    name="salarioMax"
                    placeholder="R$: 0"
                    value={salarioMax}
                    decimalsLimit={2}
                    decimalSeparator=","
                    groupSeparator="."
                    onValueChange={(value) => setSalarioMax(value)}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    style={{ width: '160px', height: '48px', padding: '8px' }}
                    fixedDecimalLength={2}
                  />
                </Box>
              </Flex>
            </Box>
          </FormControl>

          <Flex alignItems="center">
            <Text mr={2}>Deseja publicar a faixa salarial?</Text>
            <Switch size="md" colorScheme="blue" />
          </Flex>

          <Flex justifyContent="space-between" mt={4}>
            <Button variant="outline" colorScheme="gray">
              Cancelar
            </Button>
            <Button colorScheme="orange" onClick={handleSubmit(onSubmit)}>
              Próximo
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa1;
