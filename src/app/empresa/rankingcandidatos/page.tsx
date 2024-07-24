"use client";
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';

const RankingCandidatos: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title="Ranking de candidatos" isVisible={isMenuVisible} />
      <MenuLeft isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Box flex="1" p={4} ml={isMenuVisible ? "200px" : "60px"} mt="60px" transition="margin-left 0.2s">
        <Flex width="1051px" mx="auto" direction="column">
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading as="h1" size="lg" textAlign="left">Ranking de candidatos</Heading>
            <Flex alignItems="center">
              <Flex direction="column" mr={4}>
                <Text mb={2}>Teste:</Text>
                <Select placeholder="Fit cultural" width="200px" borderRadius="md">
                  <option value="fitCultural">Outros Testes</option>
                </Select>
              </Flex>
              <Flex direction="column" mr={4}>
                <Text mb={2}>Peso:</Text>
                <Select placeholder="Alto" width="100px" borderRadius="md">
                  <option value="medio">Médio</option>
                  <option value="baixo">Baixo</option>
                </Select>
              </Flex>
              <Flex direction="column">
                <Text mb={2}>Nota:</Text>
                <Select placeholder="Alto" width="100px" borderRadius="md">
                  <option value="medio">Médio</option>
                  <option value="baixo">Baixo</option>
                </Select>
              </Flex>
            </Flex>
          </Flex>
          <Box
            width="1051px"
            padding="12px 0 0 0"
            borderRadius="md"
            border="1px solid #E2E8F0"
            background="#FFFFFF"
          >
            <Table variant="simple" colorScheme="gray" borderRadius="md" overflow="hidden">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Teste</Th>
                  <Th>Peso</Th>
                  <Th>Nota</Th>
                  <Th>Currículo</Th>
                  <Th>Editar</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { nome: 'Ulisses Fernandes', teste: 'Fit cultural', peso: 'Alto', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Gabriela Oliveira', teste: 'Fit cultural', peso: 'Baixo', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Roberto Gonçalvez', teste: 'Fit cultural', peso: 'Alto', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Júlia Nascimento', teste: 'Fit cultural', peso: 'Alto', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Rodrigo Santos', teste: 'Fit cultural', peso: 'Médio', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Ronaldo Campos', teste: 'Fit cultural', peso: 'Médio', nota: '75%', curriculo: 'Ver currículo' },
                  { nome: 'Juliana Vicente', teste: 'Fit cultural', peso: 'Alto', nota: '75%', curriculo: 'Ver currículo' },
                ].map((candidato, index) => (
                  <Tr key={index}>
                    <Td>{candidato.nome}</Td>
                    <Td>{candidato.teste}</Td>
                    <Td>{candidato.peso}</Td>
                    <Td>{candidato.nota}</Td>
                    <Td>
                      <Button colorScheme="teal" variant="link" borderRadius="md">
                        {candidato.curriculo}
                      </Button>
                    </Td>
                    <Td>
                      <IconButton
                        aria-label="Editar candidato"
                        icon={<EditIcon />}
                        colorScheme="orange"
                        variant="ghost"
                        borderRadius="md"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
      <Footer isVisible={isMenuVisible} />
    </Flex>
  );
};

export default RankingCandidatos;
