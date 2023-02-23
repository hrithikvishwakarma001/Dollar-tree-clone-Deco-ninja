import { Heading, Stack, Image, useBreakpointValue, Text, VStack } from '@chakra-ui/react'
import React from 'react'
interface Props {
  title: string
  subtitle: string[]
  image: string[]
  round:boolean
}
const Advertisement = ({ title, subtitle, image,round }: Props) => {
  return (
    <Stack
      align={'center'}
      w={'100%'}
      textAlign={'center'}
    >
      <Heading
        mb='12'
        fontWeight={'semibold'}
        fontSize={useBreakpointValue({
          base: "xl",
          md: "3xl",
          lg: "4xl",
        })}>
        {title}
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w={{ base: '60%', md: '100%' }}
        justifyContent={'space-between'}
        // border='1px solid #e2e8f0'
        >
        {subtitle.map((item, index) => (
          <>
            <VStack 
              key={index} 
              w={round ? { base: '100%', md: '25%' } : { base: '100%', md:'22%'}}
            >
              <Image src={image[index]}  
               {...(round && {rounded:'full'}) }
              />
              <Text fontSize={useBreakpointValue({
                base: "lg",
                md: "xl",
                lg: "lg",
              })}
                fontWeight={'thin'}
                cursor={'pointer'}
              >{item}</Text>
            </VStack>
          </>
        ))}
      </Stack>
    </Stack>
  )
}

export default Advertisement
