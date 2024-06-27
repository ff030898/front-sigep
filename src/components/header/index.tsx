'use client'
import React from 'react'
import {
  Container,
  Box,
  Text

} from '@chakra-ui/react'


export default function Header() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>

     <Box>
        <Text>Header</Text>
     </Box>
    </Container>
  );
}