'use client';

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MenuLeft from '@/components/menuLeft';

const CadastroFuncionarioInterno: React.FC = () => {
  const [etapa, setEtapa] = useState(1);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const proximaEtapa = () => setEtapa(etapa + 1);
  const etapaAnterior = () => setEtapa(etapa - 1);
  const finalizarCadastro = () => {
    console.log('Cadastro finalizado');
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
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
    <Flex direction="column" minHeight="100vh">
      <Header title="Cadastrar Funcionário" isVisible={isMenuVisible} />
      <Flex flex="1">
        <MenuLeft isVisible={isMenuVisible} toggleMenu={toggleMenu} />
        <Box flex="1" ml={isMenuVisible ? "200px" : "60px"} mt="60px" p={4} transition="margin-left 0.2s">
          {renderEtapa()}
        </Box>
      </Flex>
      <Box mt="auto">
        <Footer isVisible={isMenuVisible} />
      </Box>
    </Flex>
  );
};

export default CadastroFuncionarioInterno;
