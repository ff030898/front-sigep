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
  Switch,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import NavegacaoEtapas from './navegacaoEtapas';

interface Etapa4Props {
  finalizarCadastro: () => void;
  etapaAnterior: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

interface Pergunta {
  pergunta: string;
  tipo: string;
  opcoes: string[];
  obrigatoria: boolean;
}

const Etapa4: React.FC<Etapa4Props> = ({ finalizarCadastro, etapaAnterior, setStep, currentStep }) => {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [novaPergunta, setNovaPergunta] = useState<string>('');
  const [tipoPergunta, setTipoPergunta] = useState<string>('Múltipla escolha');
  const [opcoes, setOpcoes] = useState<string[]>(['']);
  const [obrigatoria, setObrigatoria] = useState<boolean>(false);

  const handleAddPergunta = () => {
    if (novaPergunta) {
      setPerguntas([...perguntas, { pergunta: novaPergunta, tipo: tipoPergunta, opcoes, obrigatoria }]);
      setNovaPergunta('');
      setTipoPergunta('Múltipla escolha');
      setOpcoes(['']);
      setObrigatoria(false);
    }
  };

  const handleAddOpcao = (index: number) => {
    const newOpcoes = [...opcoes];
    newOpcoes.splice(index + 1, 0, '');
    setOpcoes(newOpcoes);
  };

  const handleOpcaoChange = (index: number, value: string) => {
    const newOpcoes = [...opcoes];
    newOpcoes[index] = value;
    setOpcoes(newOpcoes);
  };

  const handleRemoveOpcao = (index: number) => {
    const newOpcoes = opcoes.filter((_, i) => i !== index);
    setOpcoes(newOpcoes);
  };

  const handleRemovePergunta = (index: number) => {
    setPerguntas(perguntas.filter((_, i) => i !== index));
  };

  const handleFinalizar = () => {
    console.log({ perguntas });
    finalizarCadastro();
  };

  return (
    <Flex justifyContent="center" p={4}>
      <Box width="738px">
        <Stack spacing={4}>
          <Heading as="h1" size="lg" fontWeight="bold">
            Cadastrar Vaga
          </Heading>
          <NavegacaoEtapas currentStep={currentStep} setStep={setStep} />

          {perguntas.map((pergunta, index) => (
            <Box key={index} p={4} border="1px solid #E2E8F0" borderRadius="md" mb={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">{pergunta.pergunta}</Text>
                <IconButton
                  aria-label="Remove question"
                  icon={<CloseIcon />}
                  size="sm"
                  onClick={() => handleRemovePergunta(index)}
                />
              </Flex>
              <Text>Tipo: {pergunta.tipo}</Text>
              {pergunta.opcoes.map((opcao, i) => (
                <Text key={i}>Opção {i + 1}: {opcao}</Text>
              ))}
              <Text>Pergunta obrigatória: {pergunta.obrigatoria ? 'Sim' : 'Não'}</Text>
            </Box>
          ))}

          <Box p={4} border="1px solid #E2E8F0" borderRadius="md">
            <FormControl mb={4}>
              <FormLabel>Pergunta</FormLabel>
              <Input
                placeholder="Digite a pergunta"
                value={novaPergunta}
                onChange={(e) => setNovaPergunta(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Tipo</FormLabel>
              <Select value={tipoPergunta} onChange={(e) => setTipoPergunta(e.target.value)}>
                <option value="Múltipla escolha">Múltipla escolha</option>
                <option value="Dissertativa">Dissertativa</option>
              </Select>
            </FormControl>
            {tipoPergunta === 'Múltipla escolha' && (
              <FormControl mb={4}>
                <FormLabel>Opções</FormLabel>
                {opcoes.map((opcao, index) => (
                  <Flex key={index} alignItems="center" mb={2}>
                    <Input
                      value={opcao}
                      onChange={(e) => handleOpcaoChange(index, e.target.value)}
                      placeholder={`Opção ${index + 1}`}
                    />
                    <IconButton
                      aria-label="Adicionar opção"
                      icon={<AddIcon />}
                      size="sm"
                      ml={2}
                      onClick={() => handleAddOpcao(index)}
                    />
                    {opcoes.length > 1 && (
                      <IconButton
                        aria-label="Remover opção"
                        icon={<CloseIcon />}
                        size="sm"
                        ml={2}
                        onClick={() => handleRemoveOpcao(index)}
                      />
                    )}
                  </Flex>
                ))}
              </FormControl>
            )}
            <FormControl mb={4}>
              <FormLabel>Pergunta obrigatória</FormLabel>
              <Switch isChecked={obrigatoria} onChange={(e) => setObrigatoria(e.target.checked)} />
            </FormControl>
            <Button onClick={handleAddPergunta} colorScheme="orange">
              Adicionar pergunta
            </Button>
          </Box>

          <Flex justifyContent="space-between" mt={4}>
            <Button onClick={etapaAnterior} variant="outline" colorScheme="gray">
              Voltar
            </Button>
            <Button onClick={handleFinalizar} colorScheme="orange">
              Finalizar
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Etapa4;
