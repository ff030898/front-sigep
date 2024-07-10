"use client";

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface NavegacaoEtapasProps {
  currentStep: number;
  setStep: (step: number) => void;
}

const NavegacaoEtapas: React.FC<NavegacaoEtapasProps> = ({ currentStep, setStep }) => {
  return (
    <Flex mb={4} alignItems="center">
      <Text fontWeight={currentStep === 1 ? 'bold' : 'normal'} cursor="pointer" onClick={() => setStep(1)}>
        Primeiros passos
      </Text>
      <Text mx={2}>/</Text>
      <Text fontWeight={currentStep === 2 ? 'bold' : 'normal'} cursor="pointer" onClick={() => setStep(2)}>
        Skills
      </Text>
      <Text mx={2}>/</Text>
      <Text fontWeight={currentStep === 3 ? 'bold' : 'normal'} cursor="pointer" onClick={() => setStep(3)}>
        Perguntas de Triagem 
      </Text>
    </Flex>
  );
};

export default NavegacaoEtapas;
