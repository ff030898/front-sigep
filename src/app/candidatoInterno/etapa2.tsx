"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Flex,
  Text,
  Heading,
  Tag,
  TagLabel,
  TagCloseButton,
  Textarea,
} from '@chakra-ui/react';
import NavegacaoEtapas from './navegacaoEtapas';

interface Etapa2Props {
  proximaEtapa: () => void;
  etapaAnterior: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

const Etapa2: React.FC<Etapa2Props> = ({ proximaEtapa, etapaAnterior, setStep, currentStep }) => {
  const [competencias, setCompetencias] = useState<string[]>([]);
  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [competencia, setCompetencia] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleAddCompetencia = () => {
    if (competencia && !competencias.includes(competencia)) {
      setCompetencias([...competencias, competencia]);
      setCompetencia('');
    }
  };

  const handleRemoveCompetencia = (competenciaToRemove: string) => {
    setCompetencias(competencias.filter(c => c !== competenciaToRemove));
  };

  const handleAddHabilidade = () => {
    if (habilidade && !habilidades.includes(habilidade)) {
      setHabilidades([...habilidades, habilidade]);
      setHabilidade('');
    }
  };

  const handleRemoveHabilidade = (habilidadeToRemove: string) => {
    setHabilidades(habilidades.filter(h => h !== habilidadeToRemove));
  };

  return (
    <Flex justifyContent="center" p={4}>
      <Box width="738px">
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontWeight="bold">
            Cadastrar Vaga
          </Heading>
          <NavegacaoEtapas currentStep={currentStep} setStep={setStep} />

          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Textarea 
              placeholder="Descreva as atividades, requisitos e demais condições da vaga" 
              width="738px" 
              height="300px" 
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </FormControl>

          <Heading as="h2" size="md" fontWeight="bold">
            Competências/ Hard skills
          </Heading>
          <Text>Defina quais as evidências dos conhecimentos que o candidato deve possuir para ocupar a vaga.</Text>
          <Flex>
            <Input
              placeholder="Escreva uma competência"
              value={competencia}
              onChange={(e) => setCompetencia(e.target.value)}
              width="500px"
              height="48px"
            />
            <Button onClick={handleAddCompetencia} colorScheme="orange" ml={2}>
              Adicionar
            </Button>
          </Flex>
          <Flex wrap="wrap" mt={2}>
            {competencias.map((comp, index) => (
              <Tag size="md" key={index} borderRadius="full" variant="solid" colorScheme="blue" m={1}>
                <TagLabel>{comp}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveCompetencia(comp)} />
              </Tag>
            ))}
          </Flex>

          <Heading as="h2" size="md" fontWeight="bold">
            Habilidades/ Soft skills
          </Heading>
          <Text>Defina quais as habilidades interpessoais ou comportamentais que o candidato deve possuir para ocupar a vaga.</Text>
          <Flex>
            <Input
              placeholder="Escreva uma habilidade"
              value={habilidade}
              onChange={(e) => setHabilidade(e.target.value)}
              width="500px"
              height="48px"
            />
            <Button onClick={handleAddHabilidade} colorScheme="orange" ml={2}>
              Adicionar
            </Button>
          </Flex>
          <Flex wrap="wrap" mt={2}>
            {habilidades.map((hab, index) => (
              <Tag size="md" key={index} borderRadius="full" variant="solid" colorScheme="blue" m={1}>
                <TagLabel>{hab}</TagLabel>
                <TagCloseButton onClick={() => handleRemoveHabilidade(hab)} />
              </Tag>
            ))}
          </Flex>

          <Flex justifyContent="space-between" mt={4}>
            <Button onClick={etapaAnterior} variant="outline" colorScheme="gray">
              Voltar
            </Button>
            <Button onClick={proximaEtapa} colorScheme="orange">
              Próximo
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa2;
