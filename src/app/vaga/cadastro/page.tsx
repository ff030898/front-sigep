"use client";

import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Etapa1 from './etapa1';
import Etapa2 from './etapa2';
import Etapa3 from './etapa3';

const CadastroVaga: React.FC = () => {
  const [etapa, setEtapa] = useState(1);

  const proximaEtapa = () => setEtapa(etapa + 1);
  const etapaAnterior = () => setEtapa(etapa - 1);
  const finalizarCadastro = () => {
    console.log('Cadastro finalizado');
  };

  const renderEtapa = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 proximaEtapa={proximaEtapa} setStep={setEtapa} currentStep={etapa} />;
      case 2:
        return <Etapa2 proximaEtapa={proximaEtapa} etapaAnterior={etapaAnterior} setStep={setEtapa} currentStep={etapa} />;
      case 3:
        return <Etapa3 finalizarCadastro={finalizarCadastro} etapaAnterior={etapaAnterior} setStep={setEtapa} currentStep={etapa} />;
      default:
        return null;
    }
  };

  return (
    <Box p={4}>
      {renderEtapa()}
    </Box>
  );
};

export default CadastroVaga;
