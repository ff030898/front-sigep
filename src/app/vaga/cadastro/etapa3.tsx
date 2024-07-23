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
  Textarea,
} from '@chakra-ui/react';
import NavegacaoEtapas from './navegacaoEtapas';

interface Etapa3Props {
  finalizarCadastro: () => void;
  etapaAnterior: () => void;
  setStep: (step: number) => void;
  currentStep: number;
}

interface Pergunta {
  pergunta: string;
  respostaMinima: string;
  obrigatoria: boolean;
}

const Etapa3: React.FC<Etapa3Props> = ({ finalizarCadastro, etapaAnterior, setStep, currentStep }) => {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [novaPergunta, setNovaPergunta] = useState<string>('');
  const [respostaMinima, setRespostaMinima] = useState<string>('');
  const [obrigatoria, setObrigatoria] = useState<boolean>(false);
  const [mensagemQualificacao, setMensagemQualificacao] = useState<string>('');

  const handleAddPergunta = () => {
    if (novaPergunta && respostaMinima) {
      setPerguntas([...perguntas, { pergunta: novaPergunta, respostaMinima, obrigatoria }]);
      setNovaPergunta('');
      setRespostaMinima('');
      setObrigatoria(false);
    }
  };

  const handleRemovePergunta = (index: number) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas.splice(index, 1);
    setPerguntas(novasPerguntas);
  };

  const handleFinalizar = () => {
    // Lógica para enviar o formulário
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

          <Heading as="h2" size="md" fontWeight="bold">
            Perguntas de triagem
          </Heading>
          <Text>Filtre os candidatos com base em perguntas específicas.</Text>
          {perguntas.map((pergunta, index) => (
            <Box key={index} p={4} border="1px solid #E2E8F0" borderRadius="md" mb={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">{pergunta.pergunta}</Text>
                <Button size="sm" colorScheme="red" onClick={() => handleRemovePergunta(index)}>
                  Remover
                </Button>
              </Flex>
              <Flex mt={2}>
                <FormControl>
                  <FormLabel>Resposta mínima</FormLabel>
                  <Input value={pergunta.respostaMinima} isReadOnly width="200px" />
                </FormControl>
                <FormControl ml={4}>
                  <FormLabel>Pergunta obrigatória</FormLabel>
                  <Switch isChecked={pergunta.obrigatoria} isReadOnly />
                </FormControl>
              </Flex>
            </Box>
          ))}

          <Box p={4} border="1px solid #E2E8F0" borderRadius="md">
            <FormControl>
              <FormLabel>Nova Pergunta</FormLabel>
              <Input
                placeholder="Digite a pergunta"
                value={novaPergunta}
                onChange={(e) => setNovaPergunta(e.target.value)}
                width="100%"
              />
            </FormControl>
            <Flex mt={2}>
              <FormControl>
                <FormLabel>Resposta mínima</FormLabel>
                <Input
                  placeholder="Digite a resposta mínima"
                  value={respostaMinima}
                  onChange={(e) => setRespostaMinima(e.target.value)}
                  width="200px"
                />
              </FormControl>
              <FormControl ml={4}>
                <FormLabel>Pergunta obrigatória</FormLabel>
                <Switch
                  isChecked={obrigatoria}
                  onChange={(e) => setObrigatoria(e.target.checked)}
                />
              </FormControl>
            </Flex>
            <Button mt={4} onClick={handleAddPergunta} colorScheme="orange">
              Adicionar pergunta
            </Button>
          </Box>

          <Heading as="h2" size="md" fontWeight="bold">
            Configuração de qualificação
          </Heading>
          <Text>Enviar mensagem aos candidatos qualificados</Text>
          <FormControl>
            <Textarea
              placeholder="Insira o texto que irá aparecer para os candidatos qualificados"
              value={mensagemQualificacao}
              onChange={(e) => setMensagemQualificacao(e.target.value)}
            />
          </FormControl>

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

export default Etapa3;
