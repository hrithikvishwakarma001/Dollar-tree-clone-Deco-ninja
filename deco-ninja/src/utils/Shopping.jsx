import { Container, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import CardSkeleton from "./CardSkeleton";
import SlidesCard from "./SlidesCard";
import { HelperContext } from "../context/HelperProvider";
const Shopping = () => { 
const {state,dispatch} = React.useContext(HelperContext)

 const url = "https://diagnostic-boiled-shift.glitch.me/products?_page=1&_limit=9";
 React.useEffect(() => {
	axios.get(url).then((res) => {
		dispatch({type:'SUCCESS',payload:res.data})
	}).catch((err) => {
		dispatch({type:'ERROR',payload:err})
	});
}, []);

// console.log('👻 ~ file: Shopping.jsx:9 ~ Shopping ~ state:', state)
	return state.loading ? (
		<div>
			<Grid
				mx='auto'
				// border='1px solid red'
				w={{ base: "90%", md: "100%", lg: "100%" }}
				mt={"1rem"}
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(2,1fr)",
					lg: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
				>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((car) => (
					<CardSkeleton key={car} />
				))}
			</Grid>
		</div>
	) : (
		<div>
			<Grid
				templateColumns={{
					base: "repeat(1,1fr)",
					md: "repeat(2,1fr)",
					lg: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
				w={{ base: "90%", md: "100%", lg: "100%" }}
				mx='auto'
			>
				{state?.data
					.map(({ title, price, image: [{ src }] }, idx) => (
						<SlidesCard
							key={idx}
							title={title}
							price={price}
							src={src}
							padding='1rem'
						/>
					))}
			</Grid>
			<Flex justifyContent='flex-end' mb='5'>
				{/* <Pagination total={total} page={page} /> */}
				pagination
			</Flex>
		</div>
	);
};

export default Shopping;
