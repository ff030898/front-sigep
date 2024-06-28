'use client'
import React from 'react'
import {
  GridItem,
  Grid,
  Container,
  Text,
  Stack

} from '@chakra-ui/react'
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';
import Footer from '@/components/footer';
import CardComponent from '@/components/card';


export default function Testes() {

  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'60px 1fr 55px'}
      gridTemplateColumns={'60px 1fr'}
      h='100vh'
      gap='0'
    >
      <GridItem pl='2' bg='white' area={'header'} borderBottom='1px solid #ddd'>
        <Header title=' ' />
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'nav'}>
        <MenuLeft />
      </GridItem>
      <GridItem pl='2' bg='gray.50' area={'main'} px={10} py={6}>
        <Container>
          <Stack spacing={3}>
            <Text fontWeight='600'>Meus testes</Text>
            <CardComponent color='teal.800' />
          </Stack>
        </Container>
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
}