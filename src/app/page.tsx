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
        <Text>Landing Page</Text>
     </Box>
    </Container>
  );
}