import React from "react";
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
	useColorModeValue,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Heading,
	Center,
	StatArrow,
	StatHelpText,
} from "@chakra-ui/react";
import AdminTable from "../utils/AdminTable";

const AdminPage = () => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	console.log("👻 ~ file: AdminPage.jsx:28 ~ AdminPage ~ cart:", cart);
	const titles = [
		"product_name",
		"product_price",
		"product_category",
		"product_color_name",
		"product_color_code",
		"product_id",
	];
	return (
		<>
			<Center mt={20}>
				<Heading>Users History</Heading>
			</Center>
			<Container
				maxW={"72%"}
				mt={20}
				mb={40}
				py={5}
				boxShadow={"2xl"}
				rounded={"md"}
				bg={useColorModeValue("white", "#000000")}
        transition={"all 0.2s ease-in-out"}
        _hover={{
          shadow: "xl",
        }}
        color={useColorModeValue("black", "gray.500")}
        >
				<Tabs variant='soft-rounded' colorScheme='green'>
					<TabList
						display={"flex"}
						justifyContent={"space-around"}
						px='50'>
						<Tab>User Details</Tab>
						<Tab>Cart History</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<AdminTable />
						</TabPanel>
						<TabPanel>
							<TableContainer>
								<Table
									size='sm'
									cursor={{
										base: "all-scroll",
										md: "default",
									}}>
									<Thead>
										<Tr>
											{titles.map((key) => (
												<Th key={key}>{key}</Th>
											))}
										</Tr>
									</Thead>
									<Tbody>
										{cart.map(
											(
												{
													title,
													price,
													image: [
														{ src, dataAltImage },
													],
													category,
													swatches: [
														{
															colorCode,
															colorName,
														},
													],
													articleCode,
												},
												index
											) => {
												return (
													<Tr key={index}>
														<Td>{title}</Td>
														<Td>{price}</Td>
														<Td>{category}</Td>
														<Td>{colorName}</Td>
														<Td bg={colorCode}>{colorCode}</Td>
														<Td>#{articleCode}</Td>
													</Tr>
												);
											}
										)}
									</Tbody>
								</Table>
							</TableContainer>
						</TabPanel>
						{/* <TabPanel>
							<TableContainer>
								<Table variant='simple'>
									<Thead>
										<Tr>
											<Th>S no.</Th>
											<Th>Vehicle</Th>
											<Th>Price</Th>
											<Th>Mileage</Th>
											<Th>Color</Th>
											<Th>Product Id</Th>
										</Tr>
									</Thead>
									<Tbody>
										{bookData.map((item, index) => {
											return (
												<>
													<Tr key={index}>
														<Td>{index + 1}</Td>
														<Td>
															{item.title.trim()}
														</Td>
														<Td>£{item.price}</Td>
														<Td>{item.miles}</Td>
														<Td>{item.color}</Td>
														<Td>
															{"#" +
																item.id +
																Math.random()
																	.toString(
																		10
																	)
																	.substr(
																		2,
																		7
																	)}
														</Td>
													</Tr>
												</>
											);
										})}
									</Tbody>
								</Table>
							</TableContainer>
						</TabPanel>
						<TabPanel>
							<p>cars!</p>
						</TabPanel> */}
					</TabPanels>
				</Tabs>
			</Container>
		</>
	);
};

export default AdminPage;
