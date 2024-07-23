'use client'
import React from 'react'
import {
  Box,
  Text,
  Avatar,
  Badge,
  Button,
Flex,
  Stack,
  Icon,
  Progress
} from '@chakra-ui/react'
import { BsGeoAlt, BsBriefcase, BsClock, BsCurrencyDollar } from 'react-icons/bs'

type Props = {
  role: string,
  company: string,
  status: string,
  level: string,
  type: string,
  location: string,
  workMode: string,
  salaryRange: string,
  progress: number,
  endDate: string
}

export default function CandidaturaCard({
  role, company, status, level, type, location, workMode, salaryRange, progress, endDate
}: Props) {
  return (
    <Box width='359px' p={4} boxShadow='sm' bg='white' borderRadius='md'>
      <Flex alignItems='center'>
        <Avatar size='md' name={role} />
        <Box ml='3'>
          <Text fontWeight='bold'>
            {role}
          </Text>
          <Text fontSize='sm'>{company}</Text>
        </Box>
      </Flex>
      <Stack spacing={2} mt={4}>
        <Flex justifyContent='center' gap={2}>
          <Badge colorScheme='blue'>{level}</Badge>
          <Badge colorScheme='orange'>{type}</Badge>
        </Flex>
        <Text fontSize='sm' fontWeight='bold'>{status}</Text>
        <Progress colorScheme='green' size='xs' value={progress} mt={2} />
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
          <Button variant='outline' colorScheme='orange' size='sm'>Desistir da vaga</Button>
          <Button colorScheme='orange' size='sm'>Ver evolução</Button>
        </Flex>
      </Stack>
    </Box>
  );
}
