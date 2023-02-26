import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Center,
	Container,
	Flex,
	Grid,
	Heading,
	HStack,
	Image,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useColorModeValue,
	useNumberInput,
	VStack,
} from "@chakra-ui/react";

import React from "react";
export function CartItem({item}:any) {

  	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			defaultValue: 1,
			min: 1,
			max: 9,
		});
	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	const {
		title,
		price,
		image: [{ src, dataAltImage }],
		category,
		swatches: [{ colorCode, colorName }],
		articleCode,
	} = item;
   
	return (
		<Flex
			cursor='grab'
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "scale(1.01)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "scale(1)";
				e.currentTarget.style.transition = "all 0.2s ease-in-out";
			}}
			mt='2'
			bg={useColorModeValue("#f2f2f2", "gray.900")}
			justifyContent={"space-between"}
			alignItems={"center"}
			p={3}
			borderRadius={"sm"}
			pr='4'
			display={{
				base: "box",
				md: "flex",
			}}>
			<Flex // border={'1px'}
				flex={0.6}
				w='100%'
				direction={{
					base: "column",
					md: "row",
				}}
				alignItems={{
					base: "left",
					md: "flext-start",
				}}>
				<Image
					src={src}
					w={{
						base: "100%",
						md: "100%",
						lg: "20%",
					}}
					mx={{
						base: "auto",
						md: "0",
					}}
				/>
				<Box
					ml={{
						base: "0",
						md: "4",
					}}>
					<Text
						fontSize={"md"}
						fontWeight={"semibold"}
						color='root.green'
						mt='2'>
						{title}
					</Text>
					<Text fontSize={"xs"} color={"gray.500"}>
						#{articleCode}
					</Text>
				</Box>
			</Flex>
			<RadioGroup>
				<VStack
					align='left'
					spacing='2'
					mt={{
						base: "3",
						md: "0",
					}}
					mb={{
						base: "4",
						md: "0",
					}}>
					<Radio value='1'>
						<Flex
							alignItems={{
								base: "center",
								md: "center",
								lg: "center",
							}}>
							<Text
								as='span'
								fontWeight={"semibold"}
								color='root.green'>
								FREE{" "}
							</Text>{" "}
							&nbsp;
							<Text> In-Store Pickup at:</Text>
						</Flex>
						<Text fontSize={"xs"} as='i'>
							Estimated Pickup: 04/01/2021
						</Text>
					</Radio>
					<Radio value='2'>UPS Delivery</Radio>
				</VStack>
			</RadioGroup>
			<HStack
				mb={{
					base: "3",
					md: "0",
				}} // border={"1px"}
				w={{
					base: "100%",
					md: "130px",
					lg: "130px",
				}}>
				<Button
					size={{
						base: "lg",
						md: "sm",
						lg: "sm",
					}}
					{...dec}
					colorScheme='red'>
					-
				</Button>
				<Input
					{...input}
					size={{
						base: "lg",
						md: "sm",
						lg: "sm",
					}}
				/>
				<Button
					size={{
						base: "lg",
						md: "sm",
						lg: "sm",
					}}
					{...inc}
					colorScheme='green'>
					+
				</Button>
			</HStack>
			<Text fontWeight={"semibold"} color='root.green' fontSize={"sm"}>
				{price}
			</Text>
		</Flex>
	);
}
