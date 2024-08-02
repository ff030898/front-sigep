'use client'
import React from 'react'
import {
    Text,
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
    image: string;
    nivel: string;
    color: string;
  }


export default function CardComponent({ title, description, color, image }: Props) {

    return (
        <Container bgColor={color} w='100%' p={6} borderRadius={8}>
            <Grid templateColumns='repeat(3, 1fr)' gap={2} display='flex' alignContent='center' alignItems='center'>
                <GridItem w='65%' h='100%'>
                    <Image
                        src={image}
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
                    <Button colorScheme='orange'>Iniciar Teste</Button>
                </GridItem>
            </Grid>

        </Container>
    );
}
