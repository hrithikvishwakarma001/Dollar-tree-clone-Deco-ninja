import { Container } from "@chakra-ui/react";
import React from "react";
import { HelperContext } from "../context/HelperProvider";

const Cart = () => {
	// const {state} = React.useContext(HelperContext);
	const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
	console.log(cartItems);
	return (
		<Container maxW={{ base: "100%", md: "90%", lg: "72%" }}>
			cart
		</Container>
	);
};

export default Cart;
