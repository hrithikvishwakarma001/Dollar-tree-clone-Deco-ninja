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
    >
      <Heading
        mb='12'
        fontWeight={'semibold'}
        fontSize={useBreakpointValue({
          base: "2xl",
          md: "3xl",
          lg: "4xl",
        })}>
        {title}
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w='full'
        justifyContent={'space-between'}
        // border='1px solid #e2e8f0'
        >
        {subtitle.map((item, index) => (
          <>
            <VStack 
              key={index} 
              w={round ? { base: '100%', md: '25%' } : { base: '100%', md:'48%'}}
            >
              <Image src={image[index]} rounded={'1.8rem'} 
               {...(round && {rounded:'full'}) }
              />
              <Text fontSize={useBreakpointValue({
                base: "lg",
                md: "xl",
                lg: "2xl",
              })}
                fontWeight={'semibold'}
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
