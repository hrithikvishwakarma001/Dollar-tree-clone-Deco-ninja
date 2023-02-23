import {
	Box,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	Flex,
	Tag,
	useColorModeValue,
	Image,
} from "@chakra-ui/react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
export default function Footer() {
	return (
		<Box
      mt={16}
			bg={useColorModeValue("#f5f5f5", "#000000")}
			color={useColorModeValue("gray.700", "gray.200")}>
			<Flex align={"center"}>{/* <Logo /> */}</Flex>
			<Container
				as={Stack}
				maxW={{ base: "100%", md: "90%", lg: "72%" }}
				mx='auto'
				py={10}>
				<SimpleGrid
					columns={{ base: 2, sm: 2, md: 6 }}
					spacing={8}
					mb={10}
					color={useColorModeValue("gray.700", "#a0aec0")}>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Customer Service
						</Text>
						<Link href={"#"}>Catalog quick order</Link>
						<Link href={"#"}>Forgot Password</Link>
						<Link href={"#"}>In-store pickup</Link>
						<Link href={"#"}>My Account</Link>
						<Link href={"#"}>Placing Tax-Exempt Orders</Link>
						<Link href={"#"}>Recall tax-exempt orders</Link>
						<Link href={"#"}>En Expanol</Link>
						<Link href={"#"}>Privacy Request</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Dollar Tree Stores
						</Text>
						<Link href={"#"}>Gift Cards</Link>
						<Link href={"#"}>Reloadable Debit Cards</Link>
						<Link href={"#"}>Pickup Truck Rental</Link>
						<Link href={"#"}>Store Locator</Link>
						<Link href={"#"}>SStore Careers</Link>
						<Link href={"#"}>Weekly Ad</Link>
						<Link href={"#"}>Value Seekers Blog</Link>
						<Link href={"#"}>Dollar Tree Canada</Link>
						<Link href={"#"}>Coronavirus Response</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Company Info
						</Text>
						<Link href={"#"}>About Us</Link>
						<Link href={"#"}>Affiliates</Link>
						<Link href={"#"}>Associates</Link>
						<Link href={"#"}>Careers</Link>
						<Link href={"#"}>Investor Relations</Link>
						<Link href={"#"}>Real Estate Partners</Link>
						<Link href={"#"}>Sustainability Report</Link>
						<Link href={"#"}>Vendor Partners</Link>
						<Link href={"#"}>W2 Information</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Furniture
						</Text>
						<Link href={"#"}> Living Room Furniture</Link>
						<Link href={"#"}>Dining & Kitchen Furniture</Link>
						<Link href={"#"}>Bar Furniture</Link>
						<Link href={"#"}>Bedroom Furniture</Link>
						<Link href={"#"}>Mattresses</Link>
						<Link href={"#"}>Accent Furniture</Link>
						<Link href={"#"}>Kids Furniture Report</Link>
						<Link href={"#"}>VShoe Racks</Link>
						<Link href={"#"}>W2 Information</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Home Furnishings
						</Text>
						<Link href={"#"}>Bedding</Link>
						<Link href={"#"}>Pillows</Link>
						<Link href={"#"}>Covers & Inserts</Link>
						<Link href={"#"}>Curtains</Link>
						<Link href={"#"}>Mats & Rugs</Link>
						<Link href={"#"}>Bath Linen</Link>
						<Link href={"#"}>Bath Accessories</Link>
						<Link href={"#"}>Table Linen</Link>
						<Link href={"#"}>Essentials</Link>
						<Link href={"#"}>Brands</Link>
					</Stack>
					<Stack align={"flex-start"}>
						<Text
							fontSize='xl'
							fontFamily={"franklin gothic medium"}>
							Home Décor
						</Text>
						<Link href={"#"}>Idols & Figurines</Link>
						<Link href={"#"}>Clocks</Link>
						<Link href={"#"}>Wall Décor</Link>
						<Link href={"#"}>Votives & Candle Holders</Link>
						<Link href={"#"}>Mirrors</Link>
						<Link href={"#"}>Decor</Link>
						<Link href={"#"}>Garden</Link>
						<Link href={"#"}>Accent Table</Link>
					</Stack>
				</SimpleGrid>
				<Flex
					// bg={useColorModeValue("#f5f5f5", "#00000")}
					color={useColorModeValue("gray.700", "#a0aec0")}
					width={"full"}
					align={"center"}
					justify={"space-between"}
					gap={6}
					fontSize={"2xl"}>
					<Image
						src='https://cdn.pixelbin.io/v2/fancy-hat-7d16f9/erase.bg()/notion.png'
						w='100px'
					/>
					<Flex justify={"flex-end"} gap={6} fontSize={"2xl"}>
						<FaFacebookF />
						<FaTwitter />
						<FaInstagram />
						<FaYoutube />
						<FaLinkedinIn />
					</Flex>
				</Flex>
			</Container>
			<Box
				p='10'
				mt='-20'
				bg={useColorModeValue("#f5f5f5", "#00000")}>
				<Flex
					align={"center"}
					_before={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						mr: 8,
					}}
					_after={{
						content: '""',
						borderBottom: "1px solid",
						borderColor: useColorModeValue("gray.200", "gray.700"),
						flexGrow: 1,
						ml: 8,
					}}>
					<Image
						src='https://gdurl.com/XV3f'
						w={{ base: "100px", md: "160px" }}
						cursor='pointer'
					/>
				</Flex>
				<Text
					pt={6}
					fontSize={"sm"}
					textAlign={"center"}
					color={useColorModeValue("gray.700", "#a0aec0")}>
					{" "}
					© 2023 Rentovento Rent A Car System, LLC
				</Text>
			</Box>
		</Box>
	);
}
