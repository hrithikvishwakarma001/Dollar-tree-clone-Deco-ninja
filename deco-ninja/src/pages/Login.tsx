import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  Container,
  Center,
  Image,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const inintialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(inintialState);
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    async function postUserData() {
      const response = await fetch(
        `https://diagnostic-boiled-shift.glitch.me/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );
      const result = await response.json();
      console.log(result);
    }

    if (
      state.firstName === "" ||
      state.lastName === "" ||
      state.email === "" ||
      state.password === ""
    ) {
      toast({
        title: "Error.",
        description: "Please fill all the fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      postUserData();
      // console.log(state);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };
  return (
		<div>
			<Container>
				<Box
					rounded='lg'
					shadow='1px 1px 3px rgba(0,0,0,0.3)'
					maxWidth={400}
					bg={useColorModeValue("white", "root.blueGray")}
					p={6}
					m='50px auto'
					as='form'>
					<Center>
						<Image src='https://gdurl.com/XV3f' w='30%' />
					</Center>
					<Heading
						w='100%'
						textAlign={"center"}
						fontWeight='normal'
						m={"5%"}
						size='lg'
						fontFamily={"franklin gothic medium"}></Heading>
					<Flex>
						<FormControl mr='5%'>
							<FormLabel
								htmlFor='first-name'
								fontWeight={"normal"}>
								First name
							</FormLabel>
							<Input
								_focusVisible={{ outline: "none" }}
								id='first-name'
								name='firstName'
								placeholder='First name'
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl>
							<FormLabel
								htmlFor='last-name'
								fontWeight={"normal"}>
								Last name
							</FormLabel>
							<Input
								_focusVisible={{ outline: "none" }}
								id='last-name'
								name='lastName'
								placeholder='First name'
								onChange={handleChange}
							/>
						</FormControl>
					</Flex>
					<FormControl mt='2%'>
						<FormLabel htmlFor='email' fontWeight={"normal"}>
							Email address
						</FormLabel>
						<Input
							_focusVisible={{ outline: "none" }}
							placeholder='Enter email'
							id='email'
							type='email'
							name='email'
							onChange={handleChange}
						/>
						<FormHelperText>
							We'll never share your email.
						</FormHelperText>
					</FormControl>

					<FormControl>
						<FormLabel
							htmlFor='password'
							fontWeight={"normal"}
							mt='2%'>
							Password
						</FormLabel>
						<InputGroup size='md'>
							<Input
								_focusVisible={{ outline: "none" }}
								pr='4.5rem'
								type={show ? "text" : "password"}
								placeholder='Enter password'
								name='password'
								onChange={handleChange}
							/>
							<InputRightElement width='4.5rem'>
								<Button
									h='1.75rem'
									size='sm'
									onClick={handleClick}>
									{show ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Center>
							<NavLink to='/'>
								<Button
									w='10rem'
									colorScheme='green'
									variant='solid'
									mt='2rem'
									onClick={handleSubmit}>
									Submit
								</Button>
							</NavLink>
						</Center>
					</FormControl>
				</Box>
			</Container>
		</div>
  );
};

export default Login;
