'use client'

import React from 'react';
import {
  Box,
  Text,
  Avatar,
  Badge,
  Button,
  Flex,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { BsGeoAlt, BsBriefcase, BsClock, BsCurrencyDollar } from 'react-icons/bs';

type Props = {
  role: string,
  company: string,
  status: string,
  level: string,
  type: string,
  location: string,
  workMode: string,
  salaryRange: string,
};

const VagaCard = ({
  role,
  company,
  status,
  level,
  type,
  location,
  workMode,
  salaryRange,
}: Props) => {
  return (
    <Box width='410px' p={4} boxShadow='sm' bg='white'  border='1px solid #ccc' borderRadius={8}>
      <Flex alignItems='center'>
        <Avatar size='md' name={role} />
        <Box ml='3'>
          <Text width='310px' maxWidth='310px' fontWeight='bold' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>{role}</Text>
          <Text fontSize='sm'>{company}</Text>
        </Box>
      </Flex>
      <Stack spacing={2} mt={4}>
        <Flex justifyContent='center' gap={2}>
          <Badge colorScheme='blue'>{level}</Badge>
          <Badge colorScheme='orange'>{type}</Badge>
        </Flex>
        <Text fontSize='sm' fontWeight='bold'>{status}</Text>
        <Flex justifyContent='space-between' alignItems='center' mt={2}>
          <Flex alignItems='center' gap={1}>
            <Icon as={BsGeoAlt} color='gray.500' />
            <Text fontSize='sm'>{location}</Text>
          </Flex>
          <Flex alignItems='center' gap={1}>
            <Icon as={BsBriefcase} color='gray.500' />
            <Text fontSize='sm'>{workMode}</Text>
          </Flex>
        </Flex>
        <Flex justifyContent='space-between' alignItems='center' mt={2}>
          <Flex alignItems='center' gap={1}>
            <Icon as={BsClock} color='gray.500' />
            <Text fontSize='sm'>Integral</Text>
          </Flex>
          <Flex alignItems='center' gap={1}>
            <Icon as={BsCurrencyDollar} color='gray.500' />
            <Text fontSize='sm'>{salaryRange}</Text>
          </Flex>
        </Flex>
        <Flex justifyContent='space-between' mt={4}>
          <Button variant='outline' colorScheme='orange' size='sm'>Ver anúncio</Button>
          <Button colorScheme='orange' size='sm'>Aplicar</Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default VagaCard;
