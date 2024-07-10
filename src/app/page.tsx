'use client'
import React from 'react'
import {
  Container,
  Box,
  Text,
  Stack,
  Button,
  Link

} from '@chakra-ui/react'

export default function Home() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center' h='100vh'>

      <Box flexDirection='row'>
        <Stack spacing={4}>
          <Text fontSize='6xl'>Guiari RH</Text>
          <Text fontSize='4xl'>Estamos em manutenção :(</Text>
          <Text>Em breve teremos novidades!</Text>
          <Text>Obrigado pela visita, estamos trabalhando em melhorias. <br/> Sempre pensando em você :)</Text>
          <Text>Se desejar falar conosco entre em contato.</Text>
          <Text>Clique no botão abaixo!</Text>
          <Button colorScheme='orange' width='250px' p={6} mt={6}>
            <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=atendimento@guiarirh.com.br' isExternal textDecoration='none'>
              Entre em contato
            </Link>
          </Button>

        </Stack>
      </Box>

    </Container>
  );
}