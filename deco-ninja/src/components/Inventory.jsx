import { Search2Icon } from "@chakra-ui/icons";
import {
	Badge,
	Box,
	Code,
	Container,
	Flex,
	FormLabel,
	Grid,
	Heading,
	HStack,
	Input,
	Stack,
	Tag,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import Bredcrumbs from "../utils/Bredcrumbs";
import Shopping from "../utils/Shopping";
import SideBar from "../utils/SideBar";
import SortComp from "../utils/SortComp";

const Inventory = () => {
	// const { setSearch, totalCar } = React.useContext(DateContext);

	return (
		<div>
			<Container maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
				<Bredcrumbs />
				<Stack
					direction={{ base: "column", md: "row", lg: "row" }}
					width={{ base: "100%", md: "100%", lg: "100%" }}
					mx='auto'
					space={8}
					align={"flex-start"}>
					<Stack
						// border='1px solid green'
						width={"100%"}
						height={"100vh"}
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"flex-start"}
						mr={8}
						bg={useColorModeValue("white", "black")}
						p={4}>
						<VStack>
							<HStack w={"100%"}>
								<FormLabel>
									<Text
										fontWeight={"bold"}
										fontSize='larger'
										mb='1'>
										44 Items Found
									</Text>
								</FormLabel>
							</HStack>
						</VStack>
						<SideBar />
					</Stack>
					<Stack 
					// border={"2px solid brown"}
						width={"100%"}
					>
						<HStack w={"100%"} justifyContent={"flex-end"}>
							<Text fontWeight={"bold"} mb='1'>
								Sort by
							</Text>
							<SortComp />
						</HStack>
						<Shopping />
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default Inventory;
