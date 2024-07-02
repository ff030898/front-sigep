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
          <Text>Estamos em manutenção e em breve teremos novidades!</Text>
          <Text>Obrigado pela visita, estamos trabalhando em melhorias.</Text>
          <Text>Se deseja falar conosco entre em contato com o link abaixo.</Text>
          <Button colorScheme='orange' width='250px' p={6} mt={6}>
            <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=atendimento@guiarirh.com.br' isExternal>
              Entre em contato
            </Link>

          </Button>

        </Stack>
      </Box>

    </Container>
  );
}