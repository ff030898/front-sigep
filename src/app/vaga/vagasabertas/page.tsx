'use client'

import React, { useState } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MenuLeft from '@/components/menuLeft';
import ListaDeVagas from './ListaDeVagas';

const VagasAbertasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title="" isVisible={isVisible} />
      <Flex flex="1">
        <MenuLeft isVisible={isVisible} toggleMenu={toggleMenu} />
        <Box flex="1" bg="gray.50" ml={isVisible ? "200px" : "60px"} transition="margin-left 0.2s" pt={4}>
          <Container maxW="container.xl" py={4}>
            
            <Box mt={8}>
              <ListaDeVagas />
            </Box>
          </Container>
        </Box>
      </Flex>
      <Footer isVisible={isVisible} />
    </Flex>
  );
};

export default VagasAbertasPage;
