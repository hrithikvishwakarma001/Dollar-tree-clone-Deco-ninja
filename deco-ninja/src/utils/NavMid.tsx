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
	useColorMode,
	Image,
	Input,
	HStack,
	VStack,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { VscSearch } from 'react-icons/vsc';
import { AiOutlineShoppingCart, AiOutlineUserDelete } from "react-icons/ai";
export default function NavMid() {
	const { isOpen, onToggle } = useDisclosure();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box maxW={{ base: "100%", md: "90%", lg: "72%" }} mx='auto'>
			<Flex
				bg={useColorModeValue("white", "root.black")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
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
				<Flex
					flex={{ base: 1 }}>
					<Image
						mr={{ base: "5rem", md: "0" }}
						srcSet='https://gdurl.com/AkqI 2x, https://gdurl.com/XV3f 1x, https://gdurl.com/XV3f 3x'
						alt='logo'
						w='15rem'
					/>
					<Flex display={{ base: "none", md: "flex" }} ml={20}
						align={"center"} justify={"flex-end"} w={{ base: "100%", md: "50%" }}
					// border='1px solid red'
					>
						{/* <DesktopNav /> */}
						<Input placeholder="Search" type='text'
							bg={useColorModeValue("gray.100", "gray.900")}
							border={0}
							rounded={'none'}
							_placeholder={{
								color: useColorModeValue("gray.500", "gray.400"),
							}}
							px={4}
							py={2}
							color={useColorModeValue("gray.500", "gray.400")}
							_focusVisible={{
								borderColor: "none",
							}}
						/>
						<Button rounded={'none'} bg={useColorModeValue("gray.100", "gray.900")} _hover={{ bg: `{useColorModeValue("gray.100", "gray.900")}` }}>
							<VscSearch size='1.2rem' color='gray.500' />
						</Button>
					</Flex>
				</Flex>

				<Stack
					flex={{ base: 1, md: 0 }}
					justify={"flex-end"}
					direction={"row"}
					spacing={{ base: 6, md: 8, lg: 14 }}
					// border='1px solid red'
					color={useColorModeValue("root.green", "gray.400")}
				>
					<Button onClick={toggleColorMode} color={useColorModeValue("black", "gray.400")}
						_hover={{ bg: 'none' }}
						bg='none'
					>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
					<HStack
						pos={'relative'}
						right='1rem'
						display={{ base: "none", md: "flex" }}
					>
						<Text>Shop</Text>
						<Image src='https://www.dollartree.com/file/general/dt_plus_pdp_plp_200x70.png' />
					</HStack>
					<VStack spacing='0'>
						<AiOutlineUserDelete size='1.5rem' />
						<Text fontSize={'xs'}>Account</Text>
					</VStack >
					<VStack spacing='0'>
						<AiOutlineShoppingCart size='1.5rem' />
						<Text fontSize={'xs'}>Cart</Text>
					</VStack>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								bg={popoverContentBgColor}
								p={4}
								rounded={"xl"}
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
				</Box>
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
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
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
						color={"pink.400"}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
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
					color={useColorModeValue("gray.600", "gray.200")}>
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
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
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
		label: "Inspiration",
		children: [
			{
				label: "Explore Design Work",
				subLabel: "Trending Design to inspire you",
				href: "#",
			},
			{
				label: "New & Noteworthy",
				subLabel: "Up-and-coming Designers",
				href: "#",
			},
		],
	},
	{
		label: "Find Work",
		children: [
			{
				label: "Job Board",
				subLabel: "Find your dream design job",
				href: "#",
			},
			{
				label: "Freelance Projects",
				subLabel: "An exclusive list for contract work",
				href: "#",
			},
		],
	},
	{
		label: "Learn Design",
		href: "#",
	},
	{
		label: "Hire Designers",
		href: "#",
	},
];
