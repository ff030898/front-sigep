'use client'
import React, { useState } from 'react'
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

type Teste = {
  title: string;
  description: string;
  materia: string;
  nivel: string;
  color: string;
}


export default function Testes() {

  const listExample = [
    {
      title: 'Teste de Português',
      description: 'Este teste avaliará suas habilidades em compreensão de texto, gramática, vocabulário e redação, com 30 questões de múltipla escolha e 1 redação em até 60 minutos.',
      materia: 'portugues',
      nivel: '',
      color: 'teal.800',

    },

    {
      title: 'Teste de Matemática',
      description: 'Este teste avaliará suas habilidades em matemática, cobrindo aritmética, álgebra e geometria, com 30 questões de múltipla escolha em até 60 minutos.',
      materia: 'matematica',
      nivel: '',
      color: 'teal.800',

    },
  ];
  const [testesList, setTestList] = useState<Teste[]>(listExample);

  //setTestList(listExample);

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
        <Header title=' ' isVisible={false} />
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'nav'}>
        <MenuLeft isVisible={false} toggleMenu={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </GridItem>
      <GridItem pl='2' bg='gray.50' area={'main'} px={10} py={6}>
        <Container>
          <Stack spacing={3}>
            <Text fontWeight='600'>Meus testes</Text>
            {
              testesList.map((teste: Teste, index: number) => {
                return (
                  <CardComponent key={index} title={teste.title} description={teste.description} color={teste.color} materia={teste.materia} nivel={teste.nivel} />
                )
              })
            }

          </Stack>
        </Container>
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'footer'}>
        <Footer isVisible={false} />
      </GridItem>
    </Grid>
  );
}