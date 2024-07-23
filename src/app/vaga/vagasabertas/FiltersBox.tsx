'use client';

import React from 'react';
import { Box, Button, Flex, Input, Select, VStack, Text } from '@chakra-ui/react';

interface FiltersBoxProps {
  filters: {
    role?: string;
    location?: string;
    salaryMin?: number;
    salaryMax?: number;
    experienceLevel?: string;
    hierarchicalLevel?: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  onApplyFilters: () => void;
}

const FiltersBox: React.FC<FiltersBoxProps> = ({
  filters,
  setFilters,
  onApplyFilters
}) => {
  return (
    <Box
      width="300px"
      height="auto"
      mt="8px"
      p={2}
      borderWidth={1}
      borderRadius="4px"
      boxShadow="0px 1px 2px 0px #0000000D"
      bg="white"
      zIndex={10}
      position="absolute"
    >
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontWeight="bold">Faixa salarial</Text>
          <Flex gap={4} mt={2} mb={4}>
            <Input
              placeholder="De"
              value={filters.salaryMin || ''}
              onChange={(e) => setFilters((prev: any) => ({ ...prev, salaryMin: Number(e.target.value) }))}
            />
            <Input
              placeholder="Até"
              value={filters.salaryMax || ''}
              onChange={(e) => setFilters((prev: any) => ({ ...prev, salaryMax: Number(e.target.value) }))}
            />
          </Flex>
        </Box>
        <Box>
          <Text fontWeight="bold">Cargo</Text>
          <Input
            placeholder="Cargo"
            value={filters.role || ''}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, role: e.target.value }))}
          />
        </Box>
        <Box>
          <Text fontWeight="bold">Região</Text>
          <Input
            placeholder="Região"
            value={filters.location || ''}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, location: e.target.value }))}
          />
        </Box>
        <Box>
          <Text fontWeight="bold">Nível de experiência</Text>
          <Select
            placeholder="Selecione o nível"
            value={filters.experienceLevel || ''}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, experienceLevel: e.target.value }))}
          >
            <option value="Júnior">Júnior</option>
            <option value="Pleno">Pleno</option>
            <option value="Sênior">Sênior</option>
          </Select>
        </Box>
        <Box>
          <Text fontWeight="bold">Nível hierárquico</Text>
          <Select
            placeholder="Selecione o nível"
            value={filters.hierarchicalLevel || ''}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, hierarchicalLevel: e.target.value }))}
          >
            <option value="Estágio">Estágio</option>
            <option value="Assistente">Assistente</option>
            <option value="Analista">Analista</option>
            <option value="Coordenador">Coordenador</option>
            <option value="Gerente">Gerente</option>
            <option value="Diretor">Diretor</option>
          </Select>
        </Box>
      </VStack>
      <Flex justifyContent="space-between" mt={4}>
        <Button variant="outline" onClick={() => setFilters({})}>Limpar</Button>
        <Button colorScheme="blue" onClick={onApplyFilters}>Aplicar Filtros</Button>
      </Flex>
    </Box>
  );
};

export default FiltersBox;
