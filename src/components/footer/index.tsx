'use client'
import React from 'react'
import {
  Container,
  Box,
  Text

} from '@chakra-ui/react'


export default function Footer() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>
     <Box pt={4}>
        <Text color='white'>&copy; Copyright 2024 Todos os direitos reservados por Guiari RH</Text>
     </Box>
    </Container>
  );
}