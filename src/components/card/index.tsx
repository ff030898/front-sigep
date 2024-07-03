'use client'
import React from 'react'
import {
    Text,
    Card,
    CardBody,
    Box,
    Button,
    Stack

} from '@chakra-ui/react'

import Image from 'next/image'

type Props = {
    color: string
}


export default function CardComponent({ color }: Props) {

    return (
        <Card bgColor={color}>
            <CardBody display='flex' alignItems='flex-start' justifyContent='center' gap={2}>
                <Image
                    src="/pencil.svg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <Box>
                    <Stack spacing={2} mr={8}>
                        <Text fontSize="md" color='gray.50'>Teste de Português.</Text>
                        <Text fontSize="xs" color='gray.50'>
                            Este teste avaliará suas habilidades em
                            compreensão de texto, gramática, vocabulário e redação,
                            com 30 questões de múltipla escolha e 1 redação em até 60 minutos.
                        </Text>
                    </Stack>
                </Box>
                <Button bgColor='orange.500' color='white'>Iniciar Teste</Button>
            </CardBody>
        </Card>
    );
}
