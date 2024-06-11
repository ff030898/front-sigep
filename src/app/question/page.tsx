'use client'
import React from 'react'
import {
  Container,
  Box,
  Text,
  Heading,
  Stack,
  RadioGroup,
  Radio,

} from '@chakra-ui/react'



export default function Question() {

  const [alternativa, setAlternativa] = React.useState('0');

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>

      <Stack spacing={2} m={8}>

        <Box marginBottom={4}>
          <Heading size="3" textAlign='center'>Teste Prático Inglês Intermediário</Heading>
        </Box>

        {/*Box questões*/}

        <Box border='1px solid' borderColor='gray.400' borderRadius={8} padding={8} minWidth='780px'>

          <Stack spacing={4}>
            <Box>
            <Heading size="3">Questão 1</Heading>
            <Text>Escolha a palavra em inglês que melhor se traduz para a palavra em português: Pequeno.</Text>
            </Box>
            <RadioGroup onChange={setAlternativa} value={alternativa}>
              <Stack direction='column' gap={4}>
                <Radio value='1' borderColor='gray.400'>A) big </Radio>
                <Radio value='2' borderColor='gray.400'>B) little</Radio>
                <Radio value='3' borderColor='gray.400'>C) medium</Radio>
                <Radio value='4' borderColor='gray.400'>D) old</Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </Box>

        {/*Fim questões*/}


      </Stack>
    </Container>
  );
}