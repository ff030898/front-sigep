'use client'
import React from 'react'
import {
    Text,
    Card,
    CardBody,
    Box,
    Button,
    Stack,
    Grid,
    GridItem,
    Container

} from '@chakra-ui/react'

import Image from 'next/image'

type Props = {
    title: string;
    description: string;
    materia: string;
    nivel: string;
    color: string;
  }


export default function CardComponent({ title, description, color, materia }: Props) {

    return (
        <Container bgColor={color} w='100%' p={6} borderRadius={8}>
            <Grid templateColumns='repeat(3, 1fr)' gap={2} display='flex' alignContent='center' alignItems='center'>
                <GridItem w='65%' h='100%'>
                    <Image
                        src={`/imagens/testes/${materia}.svg`}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </GridItem>
                <GridItem w='210%'  h='100%'>

                    <Stack spacing={2} mr={8}>
                        <Text as='b' fontSize="md" color='gray.50'>{title}</Text>
                        <Text fontSize='xs' color='gray.50'>{description}</Text>
                    </Stack>

                </GridItem>
                <GridItem w='25%' h='100%'>
                    <Button bgColor='orange.500' color='white'>Iniciar Teste</Button>
                </GridItem>
            </Grid>

        </Container>
    );
}
