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
  image: string;
  nivel: string;
  color: string;
}


export default function Testes() {

  const listExample = [
    {
      title: 'Teste de Português',
      description: 'Este teste avaliará suas habilidades em compreensão de texto, gramática, vocabulário e redação, com 30 questões de múltipla escolha e 1 redação em até 60 minutos.',
      image: '/imagens/testes/portugues.svg',
      nivel: '',
      color: 'teal.800',

    },

    {
      title: 'Teste de Matemática',
      description: 'Este teste avaliará suas habilidades em matemática, cobrindo aritmética, álgebra e geometria, com 30 questões de múltipla escolha em até 60 minutos.',
      image: '/imagens/testes/matematica.svg',
      nivel: '',
      color: 'teal.800',

    },
    {
      title: 'Teste de Lógica',
      description: 'Este teste avaliará suas habilidades em lógica, cobrindo aritmética, álgebra e geometria, com 30 questões de múltipla escolha em até 60 minutos.',
      image: '/imagens/testes/logica.svg',
      nivel: '',
      color: 'teal.800',

    },
    {
      title: 'Redação',
      description: 'A redação para teste de emprego é uma oportunidade única de mostrar ao recrutador quem você é e por que você seria a pessoa perfeita para a vaga.',
      image: '/imagens/testes/redacao.svg',
      nivel: '',
      color: 'teal.800',

    },
    {
      title: 'Teste Fit Cultural',
      description: 'O teste fit cultural avalia se os valores, personalidade e estilo de trabalho do candidato estão alinhados com a cultura da empresa. Leia cada pergunta com atenção e reflita sobre suas experiências e crenças.',
      image: '/imagens/testes/fit.svg',
      nivel: '',
      color: 'teal.800',

    },
    {
      title: 'Teste de Inglês',
      description: ' Leia cada frase em inglês e escolha a tradução correta em português. Marque a resposta que você acredita ser a melhor. Após concluir o teste, compare suas respostas com o gabarito fornecido.',
      image: '/imagens/testes/ingles.svg',
      nivel: '',
      color: 'teal.800',

    },
    {
      title: 'Teste de Espanhol',
      description: ' Leia atentamente cada questão e siga as instruções específicas. Responda todas as questões da melhor forma possível.',
      image: '/imagens/testes/espanhol.svg',
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
                  <CardComponent key={index} title={teste.title} description={teste.description} color={teste.color} image={teste.image} nivel={teste.nivel} />
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