"use client";
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { EditIcon, SearchIcon } from '@chakra-ui/icons';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';
import { ChevronDownIcon } from '@chakra-ui/icons';

const RecrutamentoInterno: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title="Recrutamento interno" isVisible={isMenuVisible} />
      <MenuLeft isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Box flex="1" p={30} ml={isMenuVisible ? "200px" : "60px"} mt="80px" transition="margin-left 0.2s">
        <Flex width="1051px" mx="auto" direction="column">
          <Heading as="h2" size="lg" mb={10} textAlign="left">Recrutamento Interno</Heading>
          <Flex mb={4} alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <InputGroup width="300px" mr={2}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="Pesquisar nome" borderRadius="md" />
              </InputGroup>
              <Button colorScheme="orange" width="181px" height="40px" padding="0 16px" gap="8px" borderRadius="md" border="1px solid #DD6B20">Pesquisar</Button>
            </Flex>
            <Flex>
              <Button
                colorScheme="orange"
                mr={2}
                rightIcon={<ChevronDownIcon />}
                width="181px"
                height="40px"
                padding="0 16px"
                gap="8px"
                borderRadius="md"
                border="1px solid #DD6B20"
              >
                Exportar tabela
              </Button>
              <Button
                colorScheme="orange"
                width="181px"
                height="40px"
                padding="0 16px"
                gap="8px"
                borderRadius="md"
                border="1px solid #DD6B20"
              >
                Cadastrar novo
              </Button>
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
                  <Th>Cargo</Th>
                  <Th>Área ou Setor</Th>
                  <Th>Tempo mínimo no cargo atual ativo</Th>
                  <Th>Existência de advertência grave</Th>
                  <Th>Editar</Th>
                </Tr>
              </Thead>
              <Tbody>
                {[
                  { nome: 'Ulisses Fernandes', cargo: 'Gerente', setor: 'Colaborador', tempo: '6 meses', advertencia: 'Nenhuma' },
                  { nome: 'Gabriela Oliveira', cargo: 'Gerente', setor: 'Colaborador', tempo: '2 anos', advertencia: '1' },
                  { nome: 'Roberto Gonçalvez', cargo: 'Gerente', setor: 'Colaborador', tempo: '4 meses', advertencia: '2' },
                  { nome: 'Júlia Nascimento', cargo: 'Gerente', setor: 'Colaborador', tempo: '3 meses', advertencia: 'Nenhuma' },
                  { nome: 'Rodrigo Santos', cargo: 'Gerente', setor: 'Colaborador', tempo: '8 meses', advertencia: 'Nenhuma' },
                  { nome: 'Ronaldo Campos', cargo: 'Gerente', setor: 'Colaborador', tempo: '10 meses', advertencia: '2' },
                  { nome: 'Juliana Vicente', cargo: 'Gerente', setor: 'Colaborador', tempo: '1 ano', advertencia: 'Nenhuma' },
                ].map((candidato, index) => (
                  <Tr key={index}>
                    <Td>{candidato.nome}</Td>
                    <Td>{candidato.cargo}</Td>
                    <Td>{candidato.setor}</Td>
                    <Td>{candidato.tempo}</Td>
                    <Td>{candidato.advertencia}</Td>
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

export default RecrutamentoInterno;
 