'use client';

import React, { useState } from 'react';
import {
  ChakraProvider, Box, Tabs, TabList, Tab, TabPanels, TabPanel, Image
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import FormComponent from './FormComponent';
import { schema, FormData } from './schema';

const Login: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    console.log("Enviando dados para o backend:", data);
  };

  const renderImage = () => {
    if (selectedTab === 0) {
      return <Image src="/imagens/CandidatoLogin.png" alt="Imagem lateral candidato" objectFit="cover" width="100%" height="100%" />;
    }
    return <Image src="/imagens/loginEmpresa.png" alt="Imagem lateral empresa" objectFit="cover" width="100%" height="100%" />;
  };

  return (
    <ChakraProvider>
      <Box display="flex" width="100vw" height="100vh" flexDirection={{ base: "column", md: "row" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={{ base: "100%", md: "50%" }}
          height={{ base: "auto", md: "100%" }}
          bg="white"
          p={8}
          boxShadow="lg"
        >
          <Tabs isFitted variant="unstyled" onChange={(index) => setSelectedTab(index)}>
            <TabList mb="1em">
              <Tab _selected={{ color: 'blue.500', borderBottom: '2px solid', borderColor: 'blue.500' }} color="gray.500">Sou um candidato</Tab>
              <Tab _selected={{ color: 'blue.500', borderBottom: '2px solid', borderColor: 'blue.500' }} color="gray.500">Sou uma empresa</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormComponent tipo="candidato" onSubmit={onSubmit} errors={errors} register={register} handleSubmit={handleSubmit} />
              </TabPanel>
              <TabPanel>
                <FormComponent tipo="empresa" onSubmit={onSubmit} errors={errors} register={register} handleSubmit={handleSubmit} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          height={{ base: "50%", md: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="orange.100"
        >
          <Image
            src={selectedTab === 0 ? "/imagens/CandidatoLogin.png" : "/imagens/loginEmpresa.png"}
            alt={selectedTab === 0 ? "Imagem lateral candidato" : "Imagem lateral empresa"}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
