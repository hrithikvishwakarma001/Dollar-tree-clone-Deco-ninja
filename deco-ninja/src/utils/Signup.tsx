import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button, FormControl, FormLabel, Input,
	useDisclosure,
	VStack,
	Text,
	useColorModeValue,
	List,
	ListItem,
	Box,
	Center,
	Heading,
	useToast,
	Tag,
	Stack,
	HStack
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { HelperContext } from '../context/HelperProvider';
import { useNavigate } from 'react-router-dom';
import { FaUserAltSlash } from 'react-icons/fa';
import Live from './Live';
import Logout from './Logout';

export default function Signup() {
	const navigate = useNavigate();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { state, dispatch } = React.useContext(HelperContext);
	const email = React.useRef();
	const password = React.useRef();
	interface User {
		email: string;
		password: string | number;
	}
	const handleSubmit = () => {
		const data = {
			email: email?.current?.value,
			password: password?.current?.value
		}
		if(data.email=='admin@gmail.com' && data.password=='admin1432') {
		    dispatch({type:'ADMIN'})
				toast({
					title: 'Admin login.',
					description: 'You are logged in as admin.',
					status: 'success',
					duration: 1000,
					isClosable: true,
				})
				onClose()
				navigate('/admin')
		}else{
			const fetchData = async (data: User) => {
				const response = await fetch('https://diagnostic-boiled-shift.glitch.me/users');
				const user = await response.json();
				const check = user.filter((user: User) => user.email === data.email && user.password === data.password);
				if (check.length > 0) {
					localStorage.setItem('user', JSON.stringify(check[0]));
					dispatch({ type: 'LOGIN' })
					navigate('/');
					toast({
						title: 'Account created.',
						description: 'We\'ve created your account for you.',
						status: 'success',
						duration: 4000,
						isClosable: true,
					})
					onClose();
				} else if(data?.email?.length==0 || data?.password?.length==0) {
					toast({
						description: 'Please fill all the fields.',
						status: 'warning',
						duration: 4000,
						isClosable: true,
					})
				} else {
					toast({
						title: 'Account not found.',
						description: 'We could not find an account',
						status: 'error',
						duration: 4000,
						isClosable: true,
					})
				}
			}
			fetchData(data)
		}
	}

	const user = JSON.parse(localStorage.getItem('user') || '{}');
	React.useEffect(() => {
		 if (Object.keys(user).length > 0) {
			 dispatch({ type: 'LOGIN'})
		}
	}, [])
	return (
		<>
			{
				!state.isAuth
					? <VStack spacing='0' onClick={onOpen} cursor='pointer' 
	          // pos={'relative'}
						// left = {'1rem'}
					>
						<AiOutlineUserDelete size='1.5rem' />
						<Text fontSize={'xs'}>Account</Text>
					</VStack >
					: (
						<>
							<Logout name={user?.firstName.toUpperCase()}/>
						</>
					)
			}
			<Modal
				size='xs'
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={useColorModeValue('gray.50', 'root.blueGray')}
				>
					<ModalHeader
						bg={useColorModeValue('#e2ead7', 'gray.800')}
						color={useColorModeValue('root.green', 'gray.400')}
					>Your Account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}
						color={useColorModeValue('black', 'gray.400')}
					>
						<VStack
						>
							<VStack spacing='2' mb='4' textAlign={'center'}>
								<Text fontSize={'13px'}>You can now use your account login and password to sign into any of our family of sites!</Text>
								<List
									color='root.green'
									display={'flex'}
								>
									<ListItem fontSize={'xs'}> ● deco-ninja.com</ListItem>
									<ListItem fontSize={'xs'}>&nbsp; ● family-ninja.com</ListItem>
								</List>
							</VStack>
							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input ref={email} placeholder='Email address'
									type={'email'}
									_focusVisible={{
										borderColor: 'root.green',
									}}
								/>
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>Password</FormLabel>
								<Input placeholder='password' _focusVisible={{
									borderColor: 'root.green',
								}}
									ref={password} type={'password'}
								/>
							</FormControl>
							<Text as='u' fontSize='xs' color='root.green'
								cursor={'pointer'}
								alignSelf='flex-start'
							>Forgot your password?</Text>
							<Center >
								<Button colorScheme='blue' mr={3}
									onClick={handleSubmit}
								>
									SIGN IN
								</Button>
							</Center>
						</VStack>
					</ModalBody>
					<ModalFooter p='0'>
						<VStack
							spacing={5}
							w='100%'
							textAlign={'center'}
							py={7}
							px='2'
							bg={useColorModeValue('#e2ead7', 'gray.800')}
						>
							<Text >Don't have an account?</Text>
							<Text fontSize='xs' color='root.green'
								cursor={'pointer'}
							>Create one today for an easier shopping experience and faster checkout.</Text>
							<VStack spacing='2' mb='4' textAlign={'center'}>
								<Text fontSize={'13px'}>You can now use your account login and password to sign into any of our family of sites!</Text>
								<List
									color='root.green'
									display={'flex'}
								>
									<ListItem fontSize={'xs'}> ● deco-ninja.com</ListItem>
									<ListItem fontSize={'xs'}>&nbsp; ● family-ninja.com</ListItem>
								</List>
							</VStack>
							<Center>
								<Button colorScheme='blue' mr={3}
									onClick={() => {
										navigate('/login')
										onClose()
									}}
								>
									CREATE ACCOUNT
								</Button>
							</Center>
						</VStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
