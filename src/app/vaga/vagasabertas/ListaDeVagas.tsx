'use client';

import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Container, Input, Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import VagaCard from './VagaCard';
import FiltersBox from './FiltersBox';
import { SearchIcon } from '@chakra-ui/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configura a URL base do Axios
axios.defaults.baseURL = 'https://sigep-app-c47680d498bc.herokuapp.com/';

interface Vaga {
  cargo: string;
  empresa: {
    nome: string;
  } | null;
  status: string;
  nivelExperiencia: string;
  tipoLocalTrabalho: string;
  localTrabalho: string;
  salario: number | null;
  nivelHierarquico?: string;
}

interface Filters {
  role?: string;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  experienceLevel?: string;
  hierarchicalLevel?: string;
}

const VagasPage: React.FC = () => {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [filteredVagas, setFilteredVagas] = useState<Vaga[]>([]);
  const [filters, setFilters] = useState<Filters>({});
  const [isFilterBoxOpen, setIsFilterBoxOpen] = useState<boolean>(false);

  useEffect(() => {
    // Fetch todas as vagas para a seção de interesse
    axios.get<Vaga[]>('/vagas')
      .then(response => {
        setVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar vagas:', error);
      });
  }, []);

  const handleApplyFilters = () => {
    applyFilters(filters);
    setIsFilterBoxOpen(false);
  };

  const applyFilters = (filters: Filters) => {
    const params: any = {};

    if (filters.role) {
      params.cargo = filters.role;
    }
    if (filters.location) {
      params.localTrabalho = filters.location;
    }
    if (filters.salaryMin !== undefined) {
      params.faixaSalarialMin = filters.salaryMin;
    }
    if (filters.salaryMax !== undefined) {
      params.faixaSalarialMax = filters.salaryMax;
    }
    if (filters.experienceLevel) {
      params.nivelExperiencia = filters.experienceLevel;
    }
    if (filters.hierarchicalLevel) {
      params.nivelHierarquico = filters.hierarchicalLevel;
    }

    axios.get<Vaga[]>('/vagas', { params })
      .then(response => {
        setFilteredVagas(response.data);
      })
      .catch(error => {
        console.error('Erro ao aplicar filtros:', error);
      });
  };

  return (
    <Container maxW="container.xl" py={4}>
      <Box mt={8}>
        <Text fontSize='xl' fontWeight='bold' mb={4}>Vagas de interesse</Text>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={6}>
          {vagas.map((vaga, index) => (
            <VagaCard
              key={index}
              role={vaga.cargo}
              company={vaga.empresa?.nome || 'Empresa não definida'}
              status={vaga.status}
              level={vaga.nivelExperiencia}
              type={vaga.tipoLocalTrabalho}
              location={vaga.localTrabalho}
              workMode={vaga.tipoLocalTrabalho}
              salaryRange={`R$${typeof vaga.salario === 'number' ? vaga.salario.toFixed(2) : 'Não informado'}`}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={8}>
        <Text fontSize='xl' fontWeight='bold' mb={4}>Pesquisar vagas</Text>
        <Flex gap={4} alignItems="center" position="relative">
          <Input 
            placeholder='Cargo' 
            value={filters.role || ''}
            onChange={(e) => setFilters({ ...filters, role: e.target.value })}
          />
          <Input 
            placeholder='Cidade, estado ou região' 
            value={filters.location || ''}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <Button
            leftIcon={<SearchIcon />}
            fontSize='16px'
            width="300px"
            height="40px"
            padding="4px 7px"
            gap="10px"
            colorScheme='orange'
            onClick={handleApplyFilters}
          >
            Pesquisar
          </Button>
          <Button
            fontSize='16px'
            width="300px"
            height="40px"
            padding="4px 7px"
            gap="10px"
            onClick={() => setIsFilterBoxOpen(!isFilterBoxOpen)}
          >
            Filtros
          </Button>
          {isFilterBoxOpen && (
            <Box position="absolute" top="50px" right="300" zIndex={10}>
              <FiltersBox
                filters={filters}
                setFilters={setFilters}
                onApplyFilters={handleApplyFilters}
              />
            </Box>
          )}
        </Flex>
        {filteredVagas.length > 0 && (
          <Box mt={8}>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={6}>
              {filteredVagas.map((vaga, index) => (
                <VagaCard
                  key={index}
                  role={vaga.cargo}
                  company={vaga.empresa?.nome || 'Empresa não definida'}
                  status={vaga.status}
                  level={vaga.nivelExperiencia}
                  type={vaga.tipoLocalTrabalho}
                  location={vaga.localTrabalho}
                  workMode={vaga.tipoLocalTrabalho}
                  salaryRange={`R$${typeof vaga.salario === 'number' ? vaga.salario.toFixed(2) : 'Não informado'}`}
                />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default VagasPage;
