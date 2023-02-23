import { Box, Container, Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Slider from "../utils/Slider";
import "../index.css";
import { ScrollTopButton } from "../utils/ScrollTopButton";
import ShopGrid from "../utils/ShopGrid";
import Advertisement from "../utils/Advertisement";
const Home = () => {
	return (
		<>
			<ScrollTopButton />
			<Container
				maxW={{ base: "100%", md: "90%", lg: "72%" }}
				mt='8'
				h='full'>
				<VStack spacing='24'>
					<Slider
						withNavigation={false}
						src={[
							"https://www.dollartree.com/file/general/w_hero_st_patricks_day_1250x400_20230130.jpg",
							"https://www.dollartree.com/file/general/w_hero_easter_1250x400_20230130.jpg",
						]}
					/>
					<ShopGrid />
					<Advertisement
						round={true}
						title='Gardening Supplies You’ll Dig'
						subtitle={[
							"Planeters & Pots",
							"Gradening Gloves & Tools",
							"Gardening Decor",
						]}
						image={[
							"https://www.dollartree.com/file/general/w_3a_planters_pots400x400_20230129.jpg",
							"https://www.dollartree.com/file/general/w_3a_gardening_gloves_tools_400x400_20230129.jpg",
							"https://www.dollartree.com/file/general/w_3a_gardening_decor_400x400_20230129.jpg",
						]}
					/>
					<Advertisement
						title='Create Cute Crafts on Our Value Seekers Blog'
						subtitle={[
							"DIY Wooden Block & Bead Family Figurines",
							"DIY Dress Up Easter Bunny Décor",
							"Rustic Bunny & Heart-Shaped Coasters",
							"How to Create the Perfect Ribbon Bow",
						]}
						image={[
							"https://www.dollartree.com/file/general/w_blog2_diy_wooden_block_bead_family_figurines_20230129.jpg",
							"https://www.dollartree.com/file/general/w_blog2_diy_dress_up_easter_bunny_20230129.jpg",
							"https://www.dollartree.com/file/general/w_3a_gardening_decor_400x400_20230129.jpg",
							"https://www.dollartree.com/file/general/w_blog2_how_to_create_the_perfect_ribbon_bow_20230129.jpg",
						]}
					/>
					<Slider withNavigation={true} />
				</VStack>
			</Container>
		</>
	);
};
export default Home;
