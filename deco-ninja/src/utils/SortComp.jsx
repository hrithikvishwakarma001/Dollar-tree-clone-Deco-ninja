import {
	Button,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { HelperContext } from "../context/HelperProvider";

const SortComp = () => {
	const { state, dispatch } = React.useContext(HelperContext);
	const handleChange = (e) => {
		const [sort, order] = e.split(" ");
		const data = state.data
	//  console.log(data[0].price.slice(3).replace(/,/g, "") - 0);
		if (sort === "price") {
			if (order === "asc") {
				data.sort((a, b) => {
					return a.price.slice(3).replace(/,/g, "") - b.price.slice(3).replace(/,/g, "");
				});
			} else {
				data.sort((a, b) => {
					return b.price.slice(3).replace(/,/g, "") - a.price.slice(3).replace(/,/g, "");
				});
			}
		} else {
			if (order === "asc") {
				data.sort((a, b) => a.title.localeCompare(b.title));
			} else {
				data.sort((a, b) => b.title.localeCompare(a.title));
			}
		}
		dispatch({ type: "SUCCESS", payload: data });
	};
	return (
		<div>
			<Menu closeOnSelect={false} w='100%'>
				<MenuButton
					
					as={Button}
					bg={useColorModeValue("gray.100", "root.blueGray")}>
					Select your options
				</MenuButton>
				<MenuList
					bg={useColorModeValue("gray.100", "root.blueGray")}
					minWidth='240px'
					// bg={useColorModeValue("gray.100", "black")}
				>
					<MenuOptionGroup
						bg={useColorModeValue("gray.100", "root.blueGray")}
						defaultValue='price asc'
						title='Order by price'
						type='radio'
						name='price'
						onChange={handleChange}>
						<MenuItemOption
							value='price asc'
							bg={useColorModeValue("gray.100", "root.blueGray")}>
							Price : Low To High
						</MenuItemOption>
						<MenuItemOption
							value='price desc'
							bg={useColorModeValue("gray.100", "root.blueGray")}>
							Price : High To Low
						</MenuItemOption>
						<MenuDivider />
						<MenuOptionGroup
							bg={useColorModeValue("gray.100", "root.blueGray")}
							defaultValue=''
							title='Order by name'
							type='radio'
							name='mileage'
							onChange={handleChange}></MenuOptionGroup>
						<MenuItemOption
							value='title asc'
							bg={useColorModeValue("gray.100", "root.blueGray")}>
							Name : A To Z
						</MenuItemOption>
						<MenuItemOption
							value='title desc'
							bg={useColorModeValue("gray.100", "root.blueGray")}>
							Name : Z To A
						</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</div>
	);
};

export default SortComp;
