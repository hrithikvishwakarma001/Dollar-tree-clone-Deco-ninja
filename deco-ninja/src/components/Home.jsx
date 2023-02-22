import { Container, VStack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return <Container
  maxW={{ base: "100%", md: "90%", lg: "72%" }}
  border='1px solid red'
  mt='8'
  >
    <VStack spacing='8'>
      <h1>Home</h1>
      <h2>dom</h2>
    </VStack>
  </Container>;
}
export default Home
