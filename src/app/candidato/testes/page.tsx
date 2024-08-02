'use client'
import React, { useState } from 'react'
import {
  GridItem,
  Grid,
  Container,
  Text,
  Stack,
  Flex,
  Box

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