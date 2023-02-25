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
	useColorModeValue,
	Box,
} from "@chakra-ui/react";
import FileSaver from "file-saver";
export default function SinglePageModal({ product }: { product: any }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [zoom, setZoom] = React.useState(false);
	const {
		title,
		price,
		image: [{ src, dataAltImage }],
		category,
		swatches: [{ colorCode, colorName }],
		articleCode,
	} = product;

	const handleClick = () => {
		onOpen();
	};

	const mainData = {
		name: title,
		price: price,
		category: category,
		color_name: colorName,
		color_Code: colorCode,
		id: articleCode,
	};

	async function handleDownload(_id, photo) {
		FileSaver.saveAs(photo, `download-${_id}deco-ninja.png`);
	}
	return (
		<>
			<Button mt={3} onClick={handleClick} w='100%'>
				Details
			</Button>

			<Modal
				onClose={onClose}
				isOpen={isOpen}
				scrollBehavior={"inside"}
				size='5xl'>
				<ModalOverlay />
				<ModalContent bg={useColorModeValue("gray.50", "root.black")}>
					<ModalHeader>Product detail</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<TableContainer>
							<Table size='sm'
								cursor={{
									base: 'all-scroll', md: 'default'
								}}
							>
								<Thead>
									<Tr>
										{Object.keys(mainData).map((key) => (
											<Th key={key}>{key}</Th>
										))}
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										{Object.values(mainData).map(
											(value, idx) =>
												idx === 4 ? (
													<Td key={value} bg={value}>
														{value}
													</Td>
												) : (
													<Td key={value}>{value}</Td>
												)
										)}
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Box
							mt='2rem'
							w='100%'
							display={"flex"}
							justifyContent='flex-end'>
							<Button
								size='sm'
								onClick={() => handleDownload(articleCode, src)}
							>Download Image</Button>
						</Box>
						<Image
							onClick={() => setZoom(!zoom)}
							transition="all 0.2s ease-out"
							src={src}
							alt={"img1"}
							w={zoom ? '100%' : '50%'}
							mx='auto'
							mt='2rem'
							cursor={zoom ? 'zoom-out' : 'zoom-in'}
						/>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
