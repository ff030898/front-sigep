'use client'
import {
  Container,
  Box,
  Flex,
  Textarea,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

export default function Home() {

  const [input, setInput] = useState('');

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === '';

  let [value, setValue] = React.useState('');

  let handleInputChangeBox = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      marginY={16}
    >
      <Flex
        direction={{
          base: "column",
          md: "row"
        }}
        align="start"
        justify="space-around"
        w="100%"
      >


        <Box p={8} border='1px' borderColor='gray.400' rounded='lg'>
          <Flex
            direction="column"
            align="start"
            justify="start"
            w="100%"
          >

            <Heading size="3">Experiência</Heading>

            <Heading size="2">Experiência Acadêmica</Heading>


            <Text>View a summary of all your customers over the last month.</Text>

          </Flex>
        </Box>


        <Box p={8} border='1px' borderColor='gray.400' rounded='lg'>
          <Flex
            direction="column"
            align="start"
            justify="start"
            w="100%"
          >

            <FormControl>
              <Select placeholder='Selecione o nível'>
                <option>Fundamental</option>
                <option>Ensino Médio</option>
                <option>Técnico</option>
                <option>Superior</option>
              </Select>
            </FormControl>

          </Flex>
        </Box>



      </Flex >
    </Flex >
  );
}
