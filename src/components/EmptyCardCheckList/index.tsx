'use client'
import React from 'react'
import {
    Text,
    Box,
    Stack,
    Container,

} from '@chakra-ui/react'

import Image from 'next/image'

type Props = {
    text: string;
    description: string;
}


export default function EmptyCardChecklistComponent({ text, description }: Props) {

    return (

        <Box>
            <Container marginLeft={6}>
                <Image
                    src='/imagens/checklist/champions.svg'
                    width={182}
                    height={196}
                    alt="Picture of the author"
                />
            </Container>

            <Stack spacing={1}>
                <Text fontWeight='700' align='center'>{text}</Text>
                <Text fontSize='xs' align='center'>{description}</Text>
            </Stack>
        </Box>





    );
}
