'use client'
import React from 'react'
import {
  Container,
  List,
  ListItem,
  ListIcon,
  Stack,
  Divider,
  Center

} from '@chakra-ui/react'
import { BsClipboardCheck, BsBank, BsGear, BsFileEarmarkMedical, BsDoorOpen } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";


export default function MenuLeft() {

  return (
    <Container display='flex' alignItems='center' justifyContent='center'>
      <List spacing={3} pt={24}>
        <Stack spacing={6}>
          <ListItem cursor='pointer'>
            <ListIcon as={BsClipboardCheck} color='white' />
          </ListItem>
          <ListItem cursor='pointer'>
            <ListIcon as={BsBank} color='white' />
          </ListItem>
          <ListItem cursor='pointer'>
            <ListIcon as={BsGear} color='white' />
          </ListItem>
          <Center width='24px'>
            <Divider orientation='horizontal' mr={2} />
          </Center>
          <ListItem cursor='pointer'>
            <ListIcon as={FiHelpCircle} color='white' />
          </ListItem>
          <ListItem cursor='pointer'>
            <ListIcon as={BsFileEarmarkMedical} color='white' />
          </ListItem>
          <ListItem cursor='pointer'>
            <ListIcon as={BsDoorOpen} color='white' />
          </ListItem>
        </Stack>
      </List>
    </Container >
  );
}