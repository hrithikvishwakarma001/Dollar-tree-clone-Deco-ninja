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
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	useColorMode,
	Image,
	Input,
	HStack,
	VStack,
	LinkOverlay,
	Switch,
	Circle,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineShoppingCart, AiOutlineUserDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { HelperContext } from "../context/HelperProvider";
export default function NavMid() {
	const { state, dispatch } = React.useContext(HelperContext);
	const [show, setShow] = React.useState(true);
	const [value, setValue] = React.useState("");
	const { isOpen, onToggle } = useDisclosure();
	const { toggleColorMode } = useColorMode();
	const imageSize = useBreakpointValue({ base: "40%", md: "50%", lg: "25%" });
	const navigate = useNavigate();
	const searchArray = [
		{ name: "vases", id: 1 },
		{ name: "kitchen kit", id: 2 },
		{ name: "knife", id: 3 },
		{ name: "bottle", id: 4 },
		{ name: "spoon", id: 5 },
		{ name: "basket", id: 5 },
		{ name: "batteries", id: 5 },
	];
	const handleClick = (e: any) => {
		e.preventDefault();
		if (value.length > 0) {
			dispatch({ type: "SEARCH", payload: value });
			navigate("/inventory");
			setShow(!show);
		}
	};
	return (
		<>
			<Flex
				bg={useColorModeValue("white", "root.black")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 3 }}
				px={{ base: 2 }}
				align={"center"}>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -1 }}
					display={{ base: "flex", md: "none" }}>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? (
								<CloseIcon w={3} h={3} />
							) : (
								<HamburgerIcon w={5} h={5} />
							)
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex flex={{ base: 4 }}>
					<Image
						onClick={() => navigate("/")}
						cursor='pointer'
						// mr={{ base: "5rem", md: "0" }}
						srcSet='https://gdurl.com/AkqI 2x,https://gdurl.com/XV3f 1x, https://gdurl.com/XV3f 3x'
						alt='logo'
						w={imageSize}
					/>
					<Flex
						display={{ base: "none", md: "flex" }}
						ml={20}
						align={"center"}
						justify={"flex-end"}
						w={{ base: "100%", md: "50%" }}
						mr={{ base: "none", md: "5" }}
						// border='1px solid red'
					>
						{/* <DesktopNav /> */}
						<Input
							placeholder='Search deco-ninja.com'
							type='text'
							bg={useColorModeValue("gray.100", "gray.900")}
							border={0}
							rounded={"none"}
							_placeholder={{
								color: useColorModeValue(
									"gray.500",
									"gray.400"
								),
							}}
							px={4}
							py={2}
							color={useColorModeValue("gray.500", "gray.400")}
							_focusVisible={{
								borderColor: "none",
							}}
							value={value}
							onClick={() => setShow(!show)}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Button
							rounded={"none"}
							bg={useColorModeValue("gray.100", "gray.900")}
							_hover={{
								bg: `{useColorModeValue("gray.100", "gray.900")}`,
							}}
							onClick={handleClick}>
							<VscSearch size='1.2rem' color='gray.500' />
						</Button>
						<VStack
							spacing='0'
							mr='1rem'
							display={show ? "none" : "block"}
							position={"absolute"}
							left={state.isAuth ? "31.4%" : "32.6%"}
							top='175'
							right='initial'
							width={state.isAuth ? "24.6%" : "27.2%"}
							zIndex={800}
							boxShadow='0 0 10px 0 rgba(0,0,0,0.2)'
							bg={useColorModeValue("gray.100", "root.blueGray")}
							py={2}>
							<Text
								w='100%'
								fontSize={"md"}
								px={4}
								py={2}
								mb='3'
								casing='uppercase'
								color='#7c8695'
								borderBottom='2px solid green'>
								Tending Searches
							</Text>
							{searchArray.map((item) => {
								return (
									<option
										value={item.name}
										key={item.id}
										onClick={() => setValue(item.name)}
										style={{
											width: "100%",
											display: "flex",
											alignItems: "center",
											padding: "0.4rem 1rem",
											fontSize: "1rem",
											color: "#7c8695",
											cursor: "pointer",
										}}>
										{" "}
										<VscSearch
											size='1.2rem'
											color='gray.500'
										/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										{item.name}
									</option>
								);
							})}
						</VStack>
					</Flex>
				</Flex>

				<Stack
					// border='1px solid red'
					mr={{ base: "0", md: "4" }}
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					align={"center"}
					direction={"row"}
					spacing={{ base: 6, md: 8, lg: 10 }}
					// border='1px solid red'
					color={useColorModeValue("root.green", "gray.400")}>
					<Switch
						size='md'
						onChange={toggleColorMode}
						colorScheme={"green"}></Switch>
					<HStack
						pos={"relative"}
						right='1rem'
						display={{ base: "none", md: "flex" }}
						w='60px'>
						<Text>Shop</Text>
						<Image
							src='https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png'
							w='20'
							h='6'
						/>
					</HStack>
					<Signup />
					<VStack
						spacing='0'
						pos={"relative"}
						top='-0.5rem'
						right='0.6rem'
						onClick={() => navigate("/cart")}
						cursor='pointer'>
						<Circle
							position={"relative"}
							top='0.5rem'
							right='-0.7rem'
							bg={useColorModeValue("root.green", "gray.400")}
							color={useColorModeValue("white", "white")}
							size='1rem'>
							<Text fontSize={"xs"}>{state.cartTotal}</Text>
						</Circle>
						<AiOutlineShoppingCart size='1.5rem' />
						<Text fontSize={"xs"}>Cart</Text>
					</VStack>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</>
	);
}

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "root.black")}
			p={4}
			display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.400")}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
				style={{ marginTop: "0!important" }}>
				<Stack pl={4} align={"start"}>
					{children &&
						children.map((child) => (
							<Link
								key={child.label}
								to={"/inventory"}
								color={useColorModeValue(
									"gray.600",
									"gray.400"
								)}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
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
