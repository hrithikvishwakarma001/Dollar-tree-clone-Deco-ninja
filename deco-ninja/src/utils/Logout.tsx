import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	AlertDialogCloseButton,
	Button,
	HStack,
	Tag,
	VStack,
	Text,
	useColorModeValue,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaUserAltSlash } from "react-icons/fa";
import { HelperContext } from "../context/HelperProvider";
import Live from "./Live";
export default function Logout({name}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {dispatch} = React.useContext(HelperContext);
	const toast = useToast()
	return (
		<>
			<HStack spacing='5' >
				<Tag size='lg' cursor='pointer' bg={useColorModeValue('gray.200', 'gray.800')} color={useColorModeValue('black', 'gray.400')}
					fontWeight='semibold'
					display={'flex'}
					alignItems={'center'}
					justifyContent={'center'}
				>{name}
					&nbsp;&nbsp;
					<Live />
				</Tag>
				<VStack spacing='0' cursor='pointer' 
					onClick={onOpen}
				>
					<FaUserAltSlash size='1.5rem' />
					<Text fontSize={'xs'}>Logout</Text>
				</VStack >
			</HStack>
			<AlertDialog
				motionPreset='slideInBottom'
				onClose={onClose}
				isOpen={isOpen}
				isCentered>
				<AlertDialogOverlay />
				<AlertDialogContent
					bg={useColorModeValue('gray.50', 'root.blueGray')}
				>
					<AlertDialogHeader>User Logout </AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						Are you sure you want to logout? 😑
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button onClick={onClose}>
							No
						</Button>
						<Button colorScheme='red' ml={3}
							onClick={() => {
								dispatch({type: 'LOGOUT'});
								onClose();
								toast({
									title: 'You have been logged out.',
									status: 'success',
									duration: 9000,
									isClosable: true,
								})
							}}
						>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	);
}
