import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import CardSkeleton from "./CardSkeleton";
import SlidesCard from "./SlidesCard";
import { HelperContext } from "../context/HelperProvider";
import Pagination from "./Pagination";
const Shopping = () => { 
const {state,dispatch} = React.useContext(HelperContext)
const [page, setPage] = React.useState(1);
const [total, setTotal] = React.useState(0);
const [limit, setLimit] = React.useState(9);
 const url = `https://diagnostic-boiled-shift.glitch.me/products?_page=${page}&_limit=${limit}&q=${state.searchValue}`;
 React.useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				dispatch({ type: "SUCCESS", payload: res.data });
				dispatch({
					type: "TOTAL",
					payload: res.headers["x-total-count"],
				});
				dispatch({ type: "PAGE", payload: page });
				setTotal(res.headers["x-total-count"] / limit);
			})
			.catch((err) => {
				dispatch({ type: "ERROR", payload: err });
			});
 }, [page, limit, state.searchValue]);

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
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}>
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
					md: "repeat(1,1fr)",
					lg: "repeat(2,1fr)",
					xl: "repeat(3,1fr)",
				}}
				gap={{ base: "1rem", md: "1rem", lg: "2rem" }}
				w={{ base: "90%", md: "100%", lg: "100%" }}
				mx='auto'>
				{state?.data.map(
					({ title, price, image: [{ src }] }, idx, arr) => (
						<Box>
							<SlidesCard
								key={idx}
								title={title}
								price={price}
								src={src}
								padding='1rem'
								singleData={arr[idx]}
							/>
						</Box>
					)
				)}
			</Grid>
			<Flex justifyContent='flex-end' mt='8'>
				<Pagination
					total={total}
					page={page}
					setLimit={setLimit}
					setPage={setPage}
				/>
			</Flex>
		</div>
	);
};

export default Shopping;
