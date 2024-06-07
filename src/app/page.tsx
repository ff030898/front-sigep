'use client'
import React from 'react'
import {
  Container,
  Box,
  Link,
  Text,
  Card,
  CardBody,
  Heading,
  Select,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Stack,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Input,
  WrapItem,
  Wrap,
  Avatar,
  Checkbox,
} from '@chakra-ui/react'


import { BsBox2Heart, BsTrashFill } from "react-icons/bs";

export default function Home() {

  const [genero, setGenero] = React.useState('1');
  const [deficiencia, setDeficiencia] = React.useState('1');
  const [pais, setPais] = React.useState('1');
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');
  const [linkedln, setLinkedln] = React.useState('');
  const [identifica, setIdentifica] = React.useState('1');
  const [identidadeGenero, setIdentidadeGenero] = React.useState('1');
  const [orientacao, setOrientacao] = React.useState('3');
  const [cor, setCor] = React.useState('1');

  const handleInputChangeNome = (e: any) => setNome(e.target.value);
  const handleInputChangeSobrenome = (e: any) => setSobrenome(e.target.value);

  const handleInputChangeCep = (e: any) => setCep(e.target.value);
  const handleInputChangeEndereco = (e: any) => setEndereco(e.target.value);
  const handleInputChangeCidade = (e: any) => setCidade(e.target.value);
  const handleInputChangeEstado = (e: any) => setEstado(e.target.value);
  const handleInputChangeLinkedln = (e: any) => setLinkedln(e.target.value);

  return (
    <Box m={16}>

      <Grid templateColumns='1fr 400px'>

        {/* Grid Left */}

        <GridItem w='100%' border='0px'>

          {/* Inicio Dados Pessoais */}
          <Accordion defaultIndex={[0]} allowMultiple p={8}>
            <AccordionItem border='1px' borderColor='gray.400' rounded='lg' p={6}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' marginBottom={4}>
                    <Heading size="3">Dados Pessoais</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>
                <FormControl isRequired marginBottom={6}>
                  <Stack spacing={2}>
                    <Box display='flex' gap={6} w='100%'>
                      <Box w='100%'>
                        <FormLabel>Nome</FormLabel>
                        <Input placeholder='Primeiro Nome' value={nome} onChange={handleInputChangeNome} borderColor='gray.400' />
                      </Box>

                      <Box w='100%'>
                        <FormLabel>Sobrenome</FormLabel>
                        <Input placeholder='Sobrenome' value={sobrenome} onChange={handleInputChangeSobrenome} borderColor='gray.400' />
                      </Box>
                    </Box>
                  </Stack>

                </FormControl>

                <Stack spacing={2}>

                  <Heading as='h3' size='sm'>
                    Gênero
                  </Heading>

                  <Stack spacing={2}>

                    <Text fontSize='xs'>Selecione o gênero que você se identifica*</Text>

                    <RadioGroup onChange={setGenero} value={genero}>
                      <Stack direction='row' gap={4}>
                        <Radio value='1' borderColor='gray.400'>Feminino</Radio>
                        <Radio value='2' borderColor='gray.400'>Masculino</Radio>
                        <Radio value='3' borderColor='gray.400'>Não-binário</Radio>
                        <Radio value='4' borderColor='gray.400'>Outros</Radio>
                        <Radio value='5' borderColor='gray.400'>Prefiro não responder</Radio>
                      </Stack>
                    </RadioGroup>
                  </Stack>

                  <Stack spacing={8} />
                  <Stack spacing={8} />

                  <Stack spacing={2}>

                    <Heading as='h3' size='sm'>
                      Deficiência
                    </Heading>

                    <Text fontSize='xs'>Você quer se candidatar para a vaga como uma pessoa com deficiência?</Text>

                    <RadioGroup onChange={setDeficiencia} value={deficiencia}>
                      <Stack direction='row' gap={4}>
                        <Radio value='1' borderColor='gray.400'>Não</Radio>
                        <Radio value='2' borderColor='gray.400'>Sim</Radio>

                      </Stack>
                    </RadioGroup>
                  </Stack>

                  <Stack spacing={8} />
                  <Stack spacing={8} />


                  <Stack spacing={2}>

                    <Heading as='h3' size='sm'>
                      Endereço
                    </Heading>

                    <Text fontSize='xs'>Lembre-se este endereço será usado em todas as suas candidaturas.</Text>

                    <Stack spacing={2} />

                    <Heading as='h3' size='xs'>
                      Você mora no Brasil ?
                    </Heading>

                    <RadioGroup onChange={setPais} value={pais}>
                      <Stack direction='row' gap={4}>
                        <Radio value='1' borderColor='gray.400'>Sim</Radio>
                        <Radio value='2' borderColor='gray.400'>Não</Radio>

                      </Stack>
                    </RadioGroup>
                  </Stack>


                  <Stack spacing={8} />
                  <Stack spacing={8} />

                  <FormControl isRequired marginBottom={4}>
                    <Stack spacing={2}>
                      <Box display='flex' gap={6} w='100%'>
                        <Box w='100%'>
                          <FormLabel>Cep</FormLabel>
                          <Input value={cep} onChange={handleInputChangeCep} borderColor='gray.400' />
                        </Box>

                        <Box w='100%'>
                          <FormLabel>Endereço</FormLabel>
                          <Input value={endereco} onChange={handleInputChangeEndereco} borderColor='gray.400' />
                        </Box>
                      </Box>
                    </Stack>

                  </FormControl>

                  <FormControl isRequired marginBottom={6}>
                    <Stack spacing={2}>
                      <Box display='flex' gap={6} w='100%'>
                        <Box w='100%'>
                          <FormLabel>Estado</FormLabel>
                          <Input value={estado} onChange={handleInputChangeEstado} borderColor='gray.400' />
                        </Box>

                        <Box w='100%'>
                          <FormLabel>Cidade</FormLabel>
                          <Input value={cidade} onChange={handleInputChangeCidade} borderColor='gray.400' />
                        </Box>
                      </Box>
                    </Stack>

                  </FormControl>

                  <FormControl isRequired marginBottom={6}>
                    <Stack spacing={2}>
                      <Box display='flex' gap={6} w='100%'>
                        <Box w='100%'>
                          <FormLabel>Perfil do Linkedln</FormLabel>

                          <Stack spacing={4}>
                            <Text fontSize='xs'>Link (URl) do seu perfil</Text>
                            <Input value={linkedln} onChange={handleInputChangeLinkedln} borderColor='gray.400' />
                          </Stack>

                        </Box>

                        <Box w='100%' />

                      </Box>
                    </Stack>

                  </FormControl>

                </Stack>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Fim Dados Pessoais */}


          {/* Inicio Experiência */}
          <Accordion defaultIndex={[0]} allowMultiple p={8}>
            <AccordionItem border='1px' borderColor='gray.400' rounded='lg' p={6}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <Heading size="3">Experiência</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>

                {/*Experiência Acadêmica */}
                <Stack spacing={2}>

                  <Heading as='h3' size='sm'>
                    Experiência acadêmica
                  </Heading>

                  <Text fontSize='xs'>Você pode informar mais de uma experiência acadêmica, caso seja necessário.</Text>

                  <Stack spacing={8} />
                  <Stack spacing={8} />
                  <Stack spacing={8} />
                  <Heading as='h6' size='xs'>
                    Experiência acadêmica 1
                  </Heading>



                  <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Formação*</Text>
                        <Select borderColor='gray.400'>
                          <option value='option1'>Fundamental</option>
                          <option value='option2'>Médio</option>
                          <option value='option3'>Técnico</option>
                          <option value='option3'>Superior</option>
                        </Select>
                      </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Grau*</Text>
                        <Select borderColor='gray.400'>
                          <option value='option1'>Fundamental</option>
                          <option value='option2'>Médio</option>
                          <option value='option3'>Técnico</option>
                          <option value='option3'>Superior</option>
                        </Select>
                      </Stack>
                    </GridItem>
                  </Grid>

                  <Stack spacing={8} />

                  <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Status*</Text>
                        <Select borderColor='gray.400'>
                          <option value='option1'>Fundamental</option>
                          <option value='option2'>Médio</option>
                          <option value='option3'>Técnico</option>
                          <option value='option3'>Superior</option>
                        </Select>
                      </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Curso*</Text>
                        <Select borderColor='gray.400'>
                          <option value='option1'>Fundamental</option>
                          <option value='option2'>Médio</option>
                          <option value='option3'>Técnico</option>
                          <option value='option3'>Superior</option>
                        </Select>
                      </Stack>
                    </GridItem>
                  </Grid>

                  <Stack spacing={8} />

                  <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Inicio*</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </Select>
                      </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>&nbsp;</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">2024</option>
                        </Select>
                      </Stack>
                    </GridItem>

                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Fim*</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </Select>
                      </Stack>
                    </GridItem>

                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>&nbsp;</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">2024</option>
                        </Select>
                      </Stack>
                    </GridItem>
                  </Grid>


                  <Stack spacing={8} />


                </Stack>

                <Link href='#' isExternal color='blue' display='flex' alignItems='center' alignContent='center' marginTop='1.5rem' mb={16}>
                  <BsTrashFill size={16} color='blue' /> <Text marginX={2} size='sx'>Remover formação </Text>
                </Link>



                {/*Experiência Profissional*/}

                <Stack spacing={2}>

                  <Heading as='h3' size='sm'>
                    Experiência profissional
                  </Heading>

                  <Text fontSize='xs'>Você pode informar mais de uma experiência profissional, caso seja necessário.</Text>

                  <Stack spacing={8} />
                  <Stack spacing={8} />
                  <Stack spacing={8} />
                  <Heading as='h6' size='xs'>
                    Experiência profissional 1
                  </Heading>

                  <Stack spacing={8} />

                  <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Empresa</Text>
                        <Input borderColor='gray.400' rounded='lg' />
                      </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Cargo</Text>
                        <Input borderColor='gray.400' rounded='lg' />
                      </Stack>
                    </GridItem>
                  </Grid>

                  <Stack spacing={8} />

                  <Checkbox size='sm' defaultChecked>Meu emprego atual</Checkbox>

                  <Stack spacing={8} />
                  <Stack spacing={8} />

                  <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Inicio*</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </Select>
                      </Stack>
                    </GridItem>
                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>&nbsp;</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">2024</option>
                        </Select>
                      </Stack>
                    </GridItem>

                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>Fim*</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">Janeiro</option>
                          <option value="2">Fevereiro</option>
                          <option value="3">Março</option>
                          <option value="4">Abril</option>
                          <option value="5">Maio</option>
                          <option value="6">Junho</option>
                          <option value="7">Julho</option>
                          <option value="8">Agosto</option>
                          <option value="9">Setembro</option>
                          <option value="10">Outubro</option>
                          <option value="11">Novembro</option>
                          <option value="12">Dezembro</option>
                        </Select>
                      </Stack>
                    </GridItem>

                    <GridItem w='100%'>
                      <Stack spacing={2}>
                        <Text fontSize='xs'>&nbsp;</Text>
                        <Select borderColor='gray.400'>
                          <option value="1">2024</option>
                        </Select>
                      </Stack>
                    </GridItem>
                  </Grid>


                  <Stack spacing={8} />


                </Stack>

                <Link href='#' isExternal color='blue' display='flex' alignItems='center' alignContent='center' marginTop='1.5rem'>
                  <BsTrashFill size={16} color='blue' /> <Text marginX={2} size='sx'>Remover experiência </Text>
                </Link>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Fim Experiência */}


          {/* Inicio Diversidade */}
          <Accordion defaultIndex={[0]} allowMultiple p={8}>
            <AccordionItem border='1px' borderColor='gray.400' rounded='lg' p={6}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' marginBottom={2}>
                    <Heading size="3">Diversidade</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>

                <Stack spacing={2} pb={4}>
                  <Text fontSize='xs'>Estado de origem</Text>
                  <Select borderColor='gray.400'>
                    <option value='option1'>Bahia</option>
                    <option value='option2'>São Paulo</option>
                    <option value='option3'>Rio de Janeiro</option>
                    <option value='option3'>Minas Gerais</option>
                  </Select>
                </Stack>


                <Stack spacing={2} marginBottom={6}>
                  <Text fontSize='xs'>Cidade de origem</Text>
                  <Select borderColor='gray.400'>
                    <option value='option1'>Salvador</option>
                    <option value='option2'>São Paulo</option>
                    <option value='option3'>Rio de Janeiro</option>
                    <option value='option3'>Belo Horizonte</option>
                  </Select>
                </Stack>

                <FormControl isRequired marginBottom={6}>
                  <Stack spacing={2}>
                    <Box display='flex' gap={6} w='100%'>
                      <Box w='100%'>
                        <Stack spacing={2}>

                          <Text fontSize='xs'>Selecione o gênero que você se identifica*</Text>

                          <RadioGroup onChange={setIdentifica} value={identifica}>
                            <Stack direction='column' gap={4}>
                              <Radio value='1' borderColor='gray.400'>Ela / Dela</Radio>
                              <Radio value='2' borderColor='gray.400'>Ele / Dele</Radio>
                              <Radio value='3' borderColor='gray.400'>Prefiro não responder</Radio>

                            </Stack>
                          </RadioGroup>
                        </Stack>
                      </Box>


                      <Box w='100%'>
                        <Stack spacing={2}>

                          <Text fontSize='xs'>Selecione o gênero que você se identifica*</Text>

                          <RadioGroup onChange={setIdentidadeGenero} value={identidadeGenero}>
                            <Stack direction='column' gap={4}>
                              <Radio value='1' borderColor='gray.400'>Cisgênero</Radio>
                              <Radio value='2' borderColor='gray.400'>Transgênero</Radio>
                              <Radio value='3' borderColor='gray.400'>Prefiro não responder</Radio>

                            </Stack>
                          </RadioGroup>
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>

                </FormControl>


                <FormControl isRequired marginBottom={6}>
                  <Stack spacing={2}>
                    <Box display='flex' gap={6} w='100%'>
                      <Box w='100%'>
                        <Stack spacing={2}>

                          <Text fontSize='xs'>Qual a sua orientação sexual?</Text>

                          <RadioGroup onChange={setOrientacao} value={orientacao}>
                            <Stack direction='column' gap={4}>
                              <Radio value='1' borderColor='gray.400'>Assexual</Radio>
                              <Radio value='2' borderColor='gray.400'>Bisexual</Radio>
                              <Radio value='3' borderColor='gray.400'>Heterossexual</Radio>
                              <Radio value='4' borderColor='gray.400'>Homossexual</Radio>
                              <Radio value='5' borderColor='gray.400'>Pansexual</Radio>
                              <Radio value='6' borderColor='gray.400'>Prefiro não responder</Radio>

                            </Stack>
                          </RadioGroup>
                        </Stack>
                      </Box>


                      <Box w='100%'>
                        <Stack spacing={2}>

                          <Text fontSize='xs'>Qual a sua cor ou raça? </Text>

                          <RadioGroup onChange={setCor} value={cor}>
                            <Stack direction='column' gap={4}>
                              <Radio value='1' borderColor='gray.400'>Amarela</Radio>
                              <Radio value='2' borderColor='gray.400'>Branca</Radio>
                              <Radio value='3' borderColor='gray.400'>Indígena</Radio>
                              <Radio value='4' borderColor='gray.400'>Parda</Radio>
                              <Radio value='5' borderColor='gray.400'>Preta</Radio>
                              <Radio value='6' borderColor='gray.400'>Prefiro não responder</Radio>

                            </Stack>
                          </RadioGroup>
                        </Stack>
                      </Box>
                    </Box>
                  </Stack>

                </FormControl>



              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Fim Diversidade */}

          {/* Inicio Habilidades */}
          <Accordion defaultIndex={[0]} allowMultiple p={8}>
            <AccordionItem border='1px' borderColor='gray.400' rounded='lg' p={6}>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <Heading size="3">Habilidades</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>

                <Stack spacing={2} pb={4}>
                  <Text fontSize='xs'>Você pode informar até 30 habilidades que possui.</Text>
                  <Stack spacing={2} />
                  <Text fontSize='xs'>Habilidade (opcional)</Text>
                  <Input borderColor='gray.400' rounded='lg' />
                </Stack>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Fim Habilidades */}

        </GridItem>

        {/* Grid Rigth */}
        <GridItem w='100%'>

          <Card border='1px' borderColor='gray.400' rounded='lg' m={8}>
            <CardBody p={6}>
              <Container >
                <Stack spacing={4} display='flex' alignItems='center' justifyContent='center'>
                  <Wrap>
                    <WrapItem>
                      <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                    </WrapItem>
                  </Wrap>

                  <Input type='file' />

                </Stack>
              </Container>



            </CardBody>
          </Card>

        </GridItem>

      </Grid>
    </Box>
  );
}
