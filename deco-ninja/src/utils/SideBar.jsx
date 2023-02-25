import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Stack,
	HStack,
	Input,
	Checkbox,
	FormLabel,
	RadioGroup,
	Radio,
	Collapse,
	Button,
	Text,
} from "@chakra-ui/react";
import { Rating } from "./SlidesCard";
const SideBar = () => {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	const RATING = [
		<Rating rating='5' numReviews={1} />,
		<Rating rating='4' numReviews={1} />,
		<Rating rating='3' numReviews={1} />,
		<Rating rating='2' numReviews={1} />,
		<Rating rating='1' numReviews={1} />,
	];

	const BRAND = [
		"Crafte's Square",
		"Kraftly",
		"Mikale",
		"Osbond jhola",
		"Floral jonasan",
	];

	const MATERIAL = [
		"Leather",
		"Wood",
		"Metal",
		"Plastic",
		"Glass",
		"Paper",
		"Stone",
		"Fabric",
		"Other",
	];

	const COLOR = [
		"Black",
		"White",
		"Red",
		"Green",
		"Blue",
		"Yellow",
		"Orange",
		"Purple",
		"Brown",
		"Grey",
		"Other",
	];

		const FINISH = [
		"Matte",
		"Glossy",
		"Metallic",
		"Other",
	];

	return (
		<>
			<Accordion allowToggle defaultIndex={[0]}>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							AVERAGE RATING AND UP
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={150} in={show}>
							{RATING.map((location, id) => (
								<HStack
									spacing={{ base: 4, md: 2 }}
									key={id}
									mt='1'>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
									<Text>
										{id == 0
											? "Up to 5⭐ star"
											: id == 1
											? "Up to 4⭐ star"
											: id == 2
											? "Up to 3⭐ star"
											: id == 3
											? "Up to 2⭐ star"
											: id == 4
											? "Up to 1⭐ star"
											: null}
									</Text>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							BRAND
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120}>
							{BRAND.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							MATERIAL BASE
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} in={show}>
							{MATERIAL.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
						<Button size='sm' onClick={handleToggle} mt='1rem'>
							Show {show ? "Less" : "More"}
						</Button>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							COLOR
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} in={show}>
							{COLOR.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
						<Button size='sm' onClick={handleToggle} mt='1rem'>
							Show {show ? "Less" : "More"}
						</Button>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem mb={4}>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							FINISH BASE
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<Collapse startingHeight={120} >
							{FINISH.map((location, id) => (
								<HStack spacing={4} key={id}>
									<Checkbox />
									<FormLabel>{location}</FormLabel>
								</HStack>
							))}
						</Collapse>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default SideBar;
