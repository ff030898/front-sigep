import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';

type FooterProps = {
  isVisible: boolean;
}

const Footer: React.FC<FooterProps> = ({ isVisible }) => {
  return (
    <Box
      bg='teal.700'
      py={4}
      mt={8}
      ml={isVisible ? "200px" : "60px"}
      transition="margin-left 0.2s"
      width={`calc(100% - ${isVisible ? "200px" : "60px"})`}
    >
      <Container display='flex' alignItems='center' justifyContent='center'>
        <Text color='white'>&copy; Copyright 2024 Todos os direitos reservados por Guiari RH</Text>
      </Container>
    </Box>
  );
}

export default Footer;
