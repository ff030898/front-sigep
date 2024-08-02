'use client'
import React from 'react'
import {
    Text,
    Box,

} from '@chakra-ui/react'

import { FaArrowRight } from "react-icons/fa";

import Image from 'next/image'

type Props = {
    title: string;
    image: string;
}


export default function ItemCardChecklistComponent({ title, image }: Props) {

    return (

        <Box flexShrink="0" border='1px solid #319795' p={6} borderRadius={8} maxWidth='210px' height='180px' cursor='pointer' _hover={{ borderColor: 'gray.200', bg: 'gray.200' }}>
            <Image
                src={image}
                width={71}
                height={71}
                alt="Skill"
            />
            <Box display='flex' alignItems='center' justifyContent='space-around' marginY={4} gap={4}>

                <Text fontWeight='400' fontSize='14px' color='teal.500' noOfLines={[1, 2, 3]}>{title}</Text>

                <FaArrowRight color='#319795' size={14} />

            </Box>

        </Box>

    );
}
