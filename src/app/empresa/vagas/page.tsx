"use client";
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Badge,
  Avatar,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MdContactPage, MdDomainDisabled } from 'react-icons/md';
import { FaBan } from 'react-icons/fa';
import { BsGeoAlt, BsBriefcase, BsClock, BsCurrencyDollar } from 'react-icons/bs';
import Footer from '@/components/footer';
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';

const PainelVagas: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const vagasMock = [
    {
      role: 'Ux Designer',
      company: 'Mude Empreendimentos',
      status: 'Publicado em 12/06/2024',
      level: 'Sênior',
      type: 'Regime CLT',
      location: 'Barueri - SP',
      workMode: 'Presencial',
      salaryRange: 'R$3.000 - R$7.000',
    },
    {
      role: 'Ux Designer',
      company: 'Mude Empreendimentos',
      status: 'Publicado em 12/06/2024',
      level: 'Sênior',
      type: 'Regime CLT',
      location: 'Barueri - SP',
      workMode: 'Presencial',
      salaryRange: 'R$3.000 - R$7.000',
    },
  ];

  return (
    <Flex direction="column" minHeight="100vh">
      <Header title="Painel de vagas" isVisible={isMenuVisible} />
      <MenuLeft isVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <Box flex="1" p={4} ml={isMenuVisible ? "200px" : "60px"} mt="60px" transition="margin-left 0.2s">
        <Heading as="h1" size="lg" mb={4}>Painel de vagas</Heading>
        <Text mb={4}>Lorem ipsum dolor sit amet consectetur.</Text>
        <SimpleGrid columns={3} spacing={1} mb={10}>
          <Box
            p={6}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="sm"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="334px"
            height="294px"
          >
            <Text fontSize="6xl" fontWeight="bold">30</Text>
            <Flex alignItems="center" mt={2} mb={2}>
              <Icon as={MdContactPage} boxSize={6} color="gray.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">Total de vagas anunciadas</Text>
            </Flex>
            <Button variant="link" colorScheme="teal" mt={2}>Ver todas</Button>
          </Box>
          <Box
            p={6}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="sm"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="334px"
            height="294px"
          >
            <Text fontSize="6xl" fontWeight="bold">12</Text>
            <Flex alignItems="center" mt={2} mb={2}>
              <Icon as={FaBan} boxSize={6} color="gray.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">Vagas suspensas</Text>
            </Flex>
            <Button variant="link" colorScheme="teal" mt={2}>Ver todas</Button>
          </Box>
          <Box
            p={6}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="sm"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="334px"
            height="294px"
          >
            <Text fontSize="6xl" fontWeight="bold">12</Text>
            <Flex alignItems="center" mt={2} mb={2}>
              <Icon as={MdDomainDisabled} boxSize={6} color="gray.500" mr={2} />
              <Text fontSize="lg" fontWeight="bold">Interrompidas</Text>
            </Flex>
            <Button variant="link" colorScheme="teal" mt={2}>Ver todas</Button>
          </Box>
        </SimpleGrid>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="xl" fontWeight="bold">Vagas abertas</Text>
          <Flex alignItems="center">
            <Menu>
              <MenuButton as={Button} colorScheme="orange" rightIcon={<ChevronDownIcon />}>
                Anunciar vaga
              </MenuButton>
              <MenuList>
                <MenuItem>Recrutamento interno</MenuItem>
                <MenuItem>Recrutamento externo</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <SimpleGrid columns={3} spacing={10}>
          {vagasMock.map((vaga, index) => (
            <Box key={index} width='359px' p={4} boxShadow='sm' bg='white' borderRadius='md'>
              <Flex alignItems='center'>
                <Avatar size='md' name={vaga.role} />
                <Box ml='3'>
                  <Text fontWeight='bold'>{vaga.role}</Text>
                  <Text fontSize='sm'>{vaga.company}</Text>
                </Box>
              </Flex>
              <Stack spacing={2} mt={4}>
                <Flex justifyContent='center' gap={2}>
                  <Badge colorScheme='blue'>{vaga.level}</Badge>
                  <Badge colorScheme='orange'>{vaga.type}</Badge>
                </Flex>
                <Text fontSize='sm' fontWeight='bold'>{vaga.status}</Text>
                <Flex justifyContent='space-between' alignItems='center' mt={2}>
                  <Flex alignItems='center' gap={1}>
                    <Icon as={BsGeoAlt} color='gray.500' />
                    <Text fontSize='sm'>{vaga.location}</Text>
                  </Flex>
                  <Flex alignItems='center' gap={1}>
                    <Icon as={BsBriefcase} color='gray.500' />
                    <Text fontSize='sm'>{vaga.workMode}</Text>
                  </Flex>
                </Flex>
                <Flex justifyContent='space-between' alignItems='center' mt={2}>
                  <Flex alignItems='center' gap={1}>
                    <Icon as={BsClock} color='gray.500' />
                    <Text fontSize='sm'>Integral</Text>
                  </Flex>
                  <Flex alignItems='center' gap={1}>
                    <Icon as={BsCurrencyDollar} color='gray.500' />
                    <Text fontSize='sm'>{vaga.salaryRange}</Text>
                  </Flex>
                </Flex>
                <Flex justifyContent='center' mt={4}>
                  <Button colorScheme='orange' size='sm'>Visualizar</Button>
                </Flex>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer isVisible={isMenuVisible} />
    </Flex>
  );
};

export default PainelVagas;
