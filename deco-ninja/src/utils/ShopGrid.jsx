import {
	Box,
	Heading,
	useBreakpointValue,
	Grid,
	Stack,
	Skeleton,
	Card,
	CardBody,
	Image,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const ShopGrid = () => {
	const url = "https://diagnostic-boiled-shift.glitch.me/products";
	const [products, setProducts] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	// console.log("start", loading);
	React.useEffect(() => {
		async function fetching() {
			await axios
				.get(url)
				.then((res) => {
					setProducts(res.data);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		fetching();
	}, []);
	// console.log("end", loading);
	return (
		<Box align='center'>
			<Heading
				fontWeight={"semibold"}
				fontSize={useBreakpointValue({
					base: "xl",
					md: "3xl",
					lg: "4xl",
				})}>
				Shop Thrilling Finds
			</Heading>
			<Grid
				templateColumns={{
					base: "repeat(2, 1fr)",
					md: "repeat(4, 1fr)",
					lg: "repeat(5, 1fr)",
					xl: "repeat(5, 1fr)",
				}}
				gap={8}
				mt='16'
				placeItems={{ base: "center", md: "start" }}>
				{loading &&
					Array.from({length:20}).map((_, idx) => {
						return (
							<Stack
								spacing='3'
								px='4' w="250px">
								<Skeleton h='200px' w='100%' />
								<Skeleton height='30px' />
							</Stack>
						);
					})}
				{!loading &&
					products
						.slice(0, 20)
						.map(({ image: [{ src }], title }, idx) => {
							return (
								<Card
									key={idx}
									transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
									_hover={{ transform: "scale(1.05)" }}
									_active={{ transform: "scale(0.95)" }}
									w={{ base: "80%", md: "100%" }}
									>
									<CardBody
										p='0'
										py='5'
										pt='0'
										bg={useColorModeValue(
											"white",
											"root.blueGray"
										)}>
										<Image
											src={src}
											alt='Green double couch with wooden legs'
											borderRadius='lg'
											objectFit='cover'
											h="200px"
											w="100%"
										/>
										<Stack mt='6' spacing='3' px='4'>
											<Heading size='sm' isTruncated>
												{title}
											</Heading>
										</Stack>
									</CardBody>
								</Card>
							);
						})}
			</Grid>
		</Box>
	);
};

export default ShopGrid;
