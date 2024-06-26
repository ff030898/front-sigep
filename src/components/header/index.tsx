'use client'
import React from 'react'
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuDivider,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  WrapItem

} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
type Props = {
  title: string
}

export default function Header({ title }: Props) {

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' px={8} py={2}>
      <ButtonGroup variant='outline'>
        <Button p={0} m={0}><ArrowBackIcon /></Button>
      </ButtonGroup>

      <Text>{title}</Text>
      <Box display='flex' alignItems='center' justifyContent='space-between' gap={2}>
        <Text>João Silva</Text>
        <Menu>
          <MenuButton p={0} m={0} border={0}>
            <WrapItem>
              <Avatar size='xs' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
            </WrapItem>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

      </Box>

    </Box>
  );
}