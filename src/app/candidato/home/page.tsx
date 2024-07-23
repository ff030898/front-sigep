'use client'
import React, { useState } from 'react'
import {
  GridItem,
  Grid
} from '@chakra-ui/react'
import Header from '@/components/header';
import MenuLeft from '@/components/menuLeft';
import Footer from '@/components/footer';
import CardCheckList from '@/components/cardCheckList';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false); 

  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'60px 1fr 55px'}
      gridTemplateColumns={'60px 1fr'}
      h='100vh'
      gap='0'
    >
      <GridItem pl='2' bg='white' area={'header'} borderBottom='1px solid #ddd'>
        <Header title='Home' isVisible={isVisible} />
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'nav'}>
        <MenuLeft isVisible={isVisible} toggleMenu={() => setIsVisible(!isVisible)} />
      </GridItem>
      <GridItem pl='2' bg='gray.50' area={'main'} px={10} py={6}>
        <CardCheckList />
      </GridItem>
      <GridItem pl='2' bg='teal.800' area={'footer'}>
        <Footer isVisible={isVisible} />
      </GridItem>
    </Grid>
  );
}
