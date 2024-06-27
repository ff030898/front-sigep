'use client'
import React from 'react'
import {
  Container,
  Box,
  Text

} from '@chakra-ui/react'
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';
import Footer from '@/components/footer';


export default function Home() {

  return (
    <Box>
      <Header />
      <MenuLeft />
      <Container display='flex' alignItems='center' justifyContent='center'>

        <Text>Home do Dashboard do Candidato</Text>

      </Container>
      <Footer />
    </Box>
  );
}