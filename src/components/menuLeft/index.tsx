'use client'
import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Stack,
  Divider,
  IconButton,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { BsClipboardCheck, BsBank, BsGear, BsFileEarmarkMedical, BsDoorOpen } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";

interface MenuLeftProps {
  isVisible: boolean;
  toggleMenu: () => void;
}

const MenuLeft: React.FC<MenuLeftProps> = ({ isVisible, toggleMenu }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bg={useColorModeValue("teal.700", "teal.700")}
      color="white"
      height="100vh"
      width={isVisible ? "200px" : "60px"}
      transition="width 0.2s"
      position="fixed"
      top="0"
      left="0"
      zIndex={1}
    >
      <Box mt={4}>
        <IconButton
          colorScheme="teal"
          aria-label="Toggle Menu"
          icon={isVisible ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          onClick={toggleMenu}
          mb={4}
          ml={isVisible ? "160px" : "10px"}
        />
        <List spacing={3}>
          <Stack spacing={6}>
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={BsClipboardCheck} color="white" />
              {isVisible && <Text as="span" ml={4}>Meu currículo</Text>}
            </ListItem>
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={BsBank} color="white" />
              {isVisible && <Text as="span" ml={4}>Ver vagas</Text>}
            </ListItem>
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={BsGear} color="white" />
              {isVisible && <Text as="span" ml={4}>Configurações</Text>}
            </ListItem>
            <Divider />
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={FiHelpCircle} color="white" />
              {isVisible && <Text as="span" ml={4}>Ajuda</Text>}
            </ListItem>
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={BsFileEarmarkMedical} color="white" />
              {isVisible && <Text as="span" ml={4}>Política de Privacidade</Text>}
            </ListItem>
            <ListItem cursor="pointer" display="flex" alignItems="center" justifyContent={isVisible ? "flex-start" : "center"} pl={isVisible ? 4 : 0}>
              <ListIcon as={BsDoorOpen} color="white" />
              {isVisible && <Text as="span" ml={4}>Sair</Text>}
            </ListItem>
          </Stack>
        </List>
      </Box>
    </Box>
  );
}

export default MenuLeft;
