import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HelperContext } from '../context/HelperProvider';

const ProceedButton = ({text,subtText,subSubText}:{text:string; subtText:string; subSubText:string}) => {
  const {state} = React.useContext(HelperContext)
  const navigate = useNavigate()
  const handleClick = () => {
     if(!state.isAuth){
        navigate('/login')
    }
  }
  return (
		<Flex
			direction={"column"}
			alignItems={"flex-start"}
			textAlign={"center"}
			justifyContent={"center"}>
			<Button bg='#1e62c1' color='white' w='270px'
       onClick={handleClick}
      >
				{text}
			</Button>
			<Text fontSize={"xs"} fontWeight='semibold'>
				{" "}
				{subtText}{" "}
			</Text>
			<Text fontSize={"xs"} as='i'>
				{" "}
				{subSubText}{" "}
			</Text>
		</Flex>
  );
}

export default ProceedButton
