'use client'
import React, { useState } from 'react'
import ItemCardChecklistComponent from '../itemCardChecklist';
import { Box, Container, Progress, Stack, Text } from '@chakra-ui/react';

type Check = {
    title: string;
    image: string;
}

export default function CardCheckList() {

    const listCheckArray = [
        {
            title: 'Cadastre seus dados',
            image: `/imagens/checklist/cadastro.svg`,

        },

        {
            title: 'Importe ou complete seu currículo',
            image: `/imagens/checklist/import.svg`,

        },
        {
            title: 'Cadastre seus conhecimentos/ hard skills',
            image: `/imagens/checklist/skill.svg`,

        },
        {
            title: 'Cadastre suas habilidades/ soft skills',
            image: `/imagens/checklist/habilidades.svg`,

        },
        {
            title: 'Registre sua foto de rosto',
            image: `/imagens/checklist/rosto.svg`,

        },
        {
            title: 'Adicione o link de seu portfólio',
            image: `/imagens/checklist/link.svg`,

        },
        {
            title: 'Adicione suas publicações',
            image: `/imagens/checklist/search.svg`,

        },
    ];
    const [checkList, setCheckList] = useState<Check[]>(listCheckArray);

    return (

        <Box bgColor='gray.100' padding={6} height='370px' borderRadius={8}>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Text fontWeight='600'>Seja bem vindo, João Silva!</Text>
                    <Text fontSize='xs'>Você está a poucos passos de completar seus dados.</Text>
                    <Progress hasStripe value={64} marginY={4} />
                </Stack>
                <Stack gap={2} direction='row' width='100%'>
                    {
                        checkList.map((check: Check, index: number) => {
                            return (
                                <ItemCardChecklistComponent key={index} title={check.title} image={check.image} />
                            )
                        })
                    }

                </Stack>

            </Stack>
        </Box>

    )
}