'use client'
import React, { useState } from 'react';
import {
  GridItem,
  Grid,
  Box,
  Container,
  Flex
} from '@chakra-ui/react';
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';
import Footer from '@/components/footer';
import CardCheckList from '@/components/cardCheckList';
import ListaDeVagas from '../../vaga/vagasabertas/ListaDeVagas';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Flex height="100vh" overflow="hidden">
      <MenuLeft isVisible={isVisible} toggleMenu={() => setIsVisible(!isVisible)} />
      <Box flex="1" ml={isVisible ? "200px" : "60px"} transition="margin-left 0.2s" overflow="hidden">
        <Flex direction="column" height="100vh">
          <Box flexShrink={0} bg='white' borderBottom='1px solid #ddd'>
            <Header title='Home' isVisible={isVisible} />
          </Box>
          <Box flex="1" overflowY="auto" bg="#f5f5f5">
            <Box px={10} py={20}>
              <CardCheckList />
              <Container maxW="container.xl">
                <Box mt={8}>
                  <ListaDeVagas />
                </Box>
              </Container>
            </Box>
            <Box bg='teal.800' p={4}>
              <Footer isVisible={isVisible} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
