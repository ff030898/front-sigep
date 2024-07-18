'use client'
import React from 'react'
import {
    Text,
    Box,
    Stack,
    Container

} from '@chakra-ui/react'

import { FaArrowRight } from "react-icons/fa";

import Image from 'next/image'

type Props = {
    title: string;
    image: string;
}


export default function ItemCardChecklistComponent({ title, image }: Props) {

    return (
            <Box width='200px' height='190px' maxWidth='210px' border='1px solid #319795' p={6} borderRadius={8} marginX={2}>
                <Image
                    src={image}
                    width={71}
                    height={71}
                    alt="Picture of the author"
                />
                <Box display='flex' alignItems='center' justifyContent='space-around' marginY={4} cursor='pointer' gap={4}>

                    <Text fontWeight='400' fontSize='14px' color='teal.500' noOfLines={[1, 2, 3]}>{title}</Text>

                    <FaArrowRight color='#319795' size={18} />

                </Box>

            </Box>

    );
}
