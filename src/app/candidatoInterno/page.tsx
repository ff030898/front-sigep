"use client";
import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Etapa1 from './etapa1';
import Etapa2 from './etapa2';
import Etapa3 from './etapa3';
import Etapa4 from './etapa4';  // Importando a nova etapa
import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';

const CadastroVaga: React.FC = () => {
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
        return <Etapa3 proximaEtapa={proximaEtapa} etapaAnterior={etapaAnterior} setStep={setEtapa} currentStep={etapa} />;
      case 4:
        return <Etapa4 finalizarCadastro={finalizarCadastro} etapaAnterior={etapaAnterior} setStep={setEtapa} currentStep={etapa} />; // Nova etapa
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title="Cadastro de Vaga" isVisible={isMenuVisible} />
      <MenuLeft isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Box flex="1" p={4} ml={isMenuVisible ? "200px" : "60px"} mt="60px" transition="margin-left 0.2s">
        {renderEtapa()}
      </Box>
      <Footer isVisible={isMenuVisible} />
    </Flex>
  );
};

export default CadastroVaga;
