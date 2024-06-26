'use client'
import React from 'react'
import {
  Container,
  Box,
  Text

} from '@chakra-ui/react'


export default function Home() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>

     <Box>
        <Text>Home do Dashboard da Empresa</Text>
     </Box>
    </Container>
  );
}