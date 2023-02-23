import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NavFoot from "../utils/NavFoot";
import NavMid from "../utils/NavMid";
import NavTop from "../utils/NavTop";
import { useState } from "react";
const Navbar = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // const handleScroll = () => {
	// 	if (window.pageYOffset > 0) {
	// 		setIsSticky(true);
	// 	} else {
	// 		setIsSticky(false);
	// 	}
  // };
  //   useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);
	return (
		<Container p='0' w='100%' maxW='full'>
			<NavTop />
			<Box
        bg={useColorModeValue('white','root.black')}
				maxW={{ base: "100%", md: "90%", lg: "72%" }}
				mx='auto'
        >
				<NavMid />
				<NavFoot />
			</Box>
		</Container>
	);
};

export default Navbar;
