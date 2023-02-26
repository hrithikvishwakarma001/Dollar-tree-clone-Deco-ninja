import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ButtonBox = ({
	src,
	text,
	subtext,
  src2
}: {
	src: string;
	src2?: string;
	text?: string;
	subtext: string;
}) => {
	return (
		<Center>
			<Flex direction={"column"} 
       textAlign={"center"}
      >
				<Button
         bg={src2?'#33599f':'#f2ba36'}
         w='240px' h='30px'
         rounded={"full"}
        >
					<Image src={src} w='15px' />
					{
          !src2
          ? <Text fontSize={"xs"}>{text}</Text>
          : <Image src={src2} w='50px' ml='5px'/>
          }
				</Button>
				<Text fontSize={"x-small"}>{subtext}</Text>
			</Flex>
		</Center>
	);
};

export default ButtonBox;
