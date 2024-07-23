'use client'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Box, Text, Badge } from '@chakra-ui/react'
import CandidaturaCard from './CandidaturaCard'

export default function CandidaturaTabs() {
  const candidaturasExemplo = [
    {
      role: 'Ux Designer',
      company: 'Mude Empreendimentos',
      status: 'Em andamento',
      level: 'Sênior',
      type: 'Regime CLT',
      location: 'Barueri - SP',
      workMode: 'Presencial',
      salaryRange: 'R$3.000 - R$7.000',
      progress: 60,
      endDate: '01/04'
    },
    {
      role: 'Desenvolvedor Frontend',
      company: 'Tech Solutions',
      status: 'Encerrada',
      level: 'Pleno',
      type: 'PJ',
      location: 'São Paulo - SP',
      workMode: 'Remoto',
      salaryRange: 'R$5.000 - R$10.000',
      progress: 100,
      endDate: '15/03'
    }
  ];

  return (
    <>
      <Text fontSize='2xl' fontWeight='bold' mb={5}>Minhas candidaturas</Text>
      <Tabs>
        <TabList mb={4}>
          <Tab>
            <Box display="flex" alignItems="center">
              Todos as vagas
              <Badge ml={2} mb={-2}>{candidaturasExemplo.length}</Badge>
            </Box>
          </Tab>
          <Tab>
            <Box display="flex" alignItems="center">
              Em andamento
              <Badge ml={2} mb={-2}>{candidaturasExemplo.filter(c => c.status === 'Em andamento').length}</Badge>
            </Box>
          </Tab>
          <Tab>
            <Box display="flex" alignItems="center">
              Encerradas
              <Badge ml={2} mb={-2}>{candidaturasExemplo.filter(c => c.status === 'Encerrada').length}</Badge>
            </Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
              {candidaturasExemplo.map((candidatura, index) => (
                <CandidaturaCard
                  key={index}
                  role={candidatura.role}
                  company={candidatura.company}
                  status={candidatura.status}
                  level={candidatura.level}
                  type={candidatura.type}
                  location={candidatura.location}
                  workMode={candidatura.workMode}
                  salaryRange={candidatura.salaryRange}
                  progress={candidatura.progress}
                  endDate={candidatura.endDate}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
              {candidaturasExemplo.filter(c => c.status === 'Em andamento').map((candidatura, index) => (
                <CandidaturaCard
                  key={index}
                  role={candidatura.role}
                  company={candidatura.company}
                  status={candidatura.status}
                  level={candidatura.level}
                  type={candidatura.type}
                  location={candidatura.location}
                  workMode={candidatura.workMode}
                  salaryRange={candidatura.salaryRange}
                  progress={candidatura.progress}
                  endDate={candidatura.endDate}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6}>
              {candidaturasExemplo.filter(c => c.status === 'Encerrada').map((candidatura, index) => (
                <CandidaturaCard
                  key={index}
                  role={candidatura.role}
                  company={candidatura.company}
                  status={candidatura.status}
                  level={candidatura.level}
                  type={candidatura.type}
                  location={candidatura.location}
                  workMode={candidatura.workMode}
                  salaryRange={candidatura.salaryRange}
                  progress={candidatura.progress}
                  endDate={candidatura.endDate}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
