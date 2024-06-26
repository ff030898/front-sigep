'use client'
import React from 'react'
import {
  Container,
  Box,
  Text

} from '@chakra-ui/react'


export default function Prova() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>

     <Box>
        <Text>Lista de Provas práticas cadastradas no Dashboard da Empresa</Text>
     </Box>
    </Container>
  );
}