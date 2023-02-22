import React from "react";

import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";

export default function NavFoot() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
			<Flex
		  	display={{ base: "none", md: "none",lg:"flex" }}
				bg={useColorModeValue("white", "root.black")}
				color={useColorModeValue("black", "gray.400")}
				minH={"60px"}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}>
					<Flex display={{ base: "none", md: "flex" }} ml={5}>
						<DesktopNav />
					</Flex>
			</Flex>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.400");
	const linkHoverColor = useColorModeValue("gray.800", "gray.200");
	const popoverContentBgColor = useColorModeValue("white", "root.blueGray");

	return (
		<Stack direction={"row"} spacing={9}>
			{NAV_ITEMS.map((navItem,idx) => (
				idx !== NAV_ITEMS.length-1 ? (<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								href={navItem.href ?? "#"}
								fontSize={"md"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									borderBottom:'2px solid green',
									textDecoration: "none",
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
							  mt={3}
								border={0}
								boxShadow={"lg"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"none"}
								minW={"sm"}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>) : (<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-end"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									borderBottom: '2px solid green',
									textDecoration: "none",
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"lg"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"none"}
								minW={"sm"}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav
											key={child.label}
											{...child}
										/>
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>)
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("green.50", "green.900") }}>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "green.400" }}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{
						opacity: "100%",
						transform: "translateX(0)",
					}}
					justify={"flex-end"}
					align={"center"}
					flex={1}>
					<Icon
						color={"green.400"}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "All Departments",
		children: [
			{
				label: "Dollar Tree PLUS",
				href: "#",
			},
			{
				label: "Holidays",
				href: "#",
			},
			{
				label: "Kitchen & Dining",
				href: "#",
			},
			{
				label: "Floral & Home Decor",
				href: "#",
			},
			{
				label: "Party Supplies",
				href: "#",
			},
			{
				label: "Food, Candy & Drinks",
				href: "#",
			},
			{
				label: "Office & School Supplies",
				href: "#",
			},
			{
				label: "Health & Beauty Supplies",
				href: "#",
			},
			{
				label: "Toys, Books, Puzzles & Games",
				href: "#",
			},
			{
				label: "Extreme Values & New Arrivals",
				href: "#",
			},
		],
	},
	{
		label: "Holidays, Seasons & Celebrations",
		children: [
			{
				label: "Valentine's Day",
				href: "#",
			},
			{
				label: "St. Patrick's Day",
				href: "#",
			},
			{
				label: "Mardi Gras",
				href: "#",
			},
			{
				label: "Easter Shop",
				href: "#",
			},
			{
				label: "Cinco de Mayo",
				href: "#",
			},
			{
				label: "Patriotic Party ",
				href: "#",
			},
			{
				label: "Supplies ",
				href: "#",
			},
			{
				label: "Halloween Shop ",
				href: "#",
			},
			{
				label: "Day of the Dead ",
				href: "#",
			},
			{
				label: "Hanukkah",
				href: "#",
			},
		],
	},
	{
		label: " Toys & Crafts",
		children: [
			{
				label: "Stuffed Animals & Dolls",
				href: "#",
			},
			{
				label: "Action Figures & Cars",
				href: "#",
			},
			{
				label: "Novelty Toys & Gag Gifts",
				href: "#",
			},
			{
				label: "Active Play",
				href: "#",
			},
			{
				label: "Dress-Up & Pretend Play",
				href: "#",
			},
			{
				label: "Glow-in-the-Dark Toys",
				href: "#",
			},
			{
				label: "Bubbles, Balls & Chalk",
				href: "#",
			},
			{
				label: "Activity Dough, Putty & Slime",
				href: "#",
			},
			{
				label: "Beach & Pool Toys",
				href: "#",
			},
		],
	},
	{
		label: "Kitchen & Home Décor",
		children: [
			{
				label: "Dinnerware",
				href: "#",
			},
			{
				label: "Glasses & Drinkware",
				href: "#",
			},
			{
				label: "Food Storage",
				href: "#",
			},
			{
				label: "Cookware & Bakeware",
				href: "#",
			},
			{
				label: "BBQ Tools & Picnic Supplies",
				href: "#",
			},
			{
				label: "Kitchen Tools & Gadgets",
				href: "#",
			},
			{
				label: "Kitchen & Table Linens",
				href: "#",
			},
			{
				label: "Catering Supplies & Serveware",
				href: "#",
			},
		],
	},
	{
		label: "Home & Office",
		children: [
			{
				label: "Paper Towels & Napkins",
				href: "#",
			},
			{
				label: "Bed & Bath",
				href: "#",
			},
			{
				label: "Auto Care & Maintenance",
				href: "#",
			},
			{
				label: "Home Improvement",
				href: "#",
			},
			{
				label: "Trash Bags",
				href: "#",
			},
			{
				label: "Pet Supplies",
				href: "#",
			},
			{
				label: "Pest Control",
				href: "#",
			},
			{
				label: "Lighters & Matches",
				href: "#",
			},
		],
	},
	{
		label: " Health & Personal Care",
		children: [
			{
				label: "Oral Care",
				href: "#",
			},
			{
				label: "Bath & Body",
				href: "#",
			},
			{
				label: "Deodorants",
				href: "#",
			},
			{
				label: "Razors & Shaving Cream",
				href: "#",
			},
			{
				label: "Hair Care",
				href: "#",
			},
			{
				label: "Makeup & Cosmetics",
				href: "#",
			},
			{
				label: "Cotton Balls & Swabs",
				href: "#",
			},
			{
				label: "Facial Tissues",
				href: "#",
			},
			{
				label: "Skincare",
				href: "#",
			},
		],
	},
	{
		label: " Food, Candy & Drinks",
		children: [
			{
				label: "Food",
				href: "#",
			},
			{
				label: "Drinks",
				href: "#",
			},
			{
				label: "Candy & Gum",
				href: "#",
			},
			{
				label: "Snacks",
				href: "#",
			},
			{
				label: "Care Package Ideas",
				href: "#",
			},
		],
	},
];
