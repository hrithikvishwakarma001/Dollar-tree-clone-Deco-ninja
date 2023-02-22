import React from "react";
import { Button, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
export function ScrollTopButton() {
  return <Button position='fixed' bottom='50px' right='0' zIndex='100' w='60px' h='60px' onClick={() => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })} bg={useColorModeValue('gray.200', 'root.blueGray')} _hover={{
    bg: useColorModeValue('gray.300', 'green.400')
  }}>
    <VStack spacing={0}>
      <ChevronUpIcon fontSize={'2xl'} />
      <Text>Top</Text>
    </VStack>
  </Button>;
}
