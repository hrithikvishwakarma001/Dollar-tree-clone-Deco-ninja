import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
	Image,
	useColorModeValue
} from "@chakra-ui/react";
export default function SinglePageModal({ product }: { product: any }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { title, price, image: [{ src, dataAltImage }], category, swatches: [{ colorCode, colorName }], articleCode } = product;

	const handleClick = () => {
		onOpen();
	};

	const mainData = {
		name: title,
		price: price,
		category: category,
		color_name: colorName,
		color_Code: colorCode,
		id: articleCode
	}
	return (
		<>
			<Button mt={3} onClick={handleClick} w='100%'>
				Details
			</Button>

			<Modal onClose={onClose} isOpen={isOpen} scrollBehavior={"inside"} size='5xl'>
				<ModalOverlay />
				<ModalContent bg={useColorModeValue('gray.50', 'root.black')}>
					<ModalHeader>Product detail</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						
					>
						<TableContainer>
							<Table size='sm'>
								<Thead>
									<Tr>
										{Object.keys(mainData).map((key) => (
											<Th key={key}>{key}</Th>
										))}
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										{Object.values(mainData).map((value,idx) => (
											idx === 4 ? <Td key={value} bg={value}>{value}</Td> : <Td key={value}>{value}</Td>
										))}
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
            <Image src={src} alt={'img1'} w='50%' mx='auto' mt='2rem'/>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
