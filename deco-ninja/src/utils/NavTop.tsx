import { Box, HStack, Image, Link, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { ImLocation } from 'react-icons/im'
import { IoBookOutline } from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
const NavTop = () => {
	return (
		<Box bg='root.green'
			maxW='-webkit-fill-available'
			display={{ base: 'none', md: 'none',lg:"block" }}
		>
			<HStack w='80rem' mx='auto'
				h='75px'
				spacing={{ base: '0', md: '5',lg:'20' }}
				>
				<HStack w='60%' h='20px' color='white' 
				 spacing='5'
				>
					<HStack as='a' href='#'>
						<ImLocation fontSize='18px' />
						<Text fontSize='xs'>Your Store: <Text as='u'>Sams Shopping Center</Text> </Text>
					</HStack>
					<HStack as='a' href='#'>
						<IoBookOutline fontSize='18px' />
						<Text fontSize='xs'> Catalog Quick Order </Text>
					</HStack>
					<HStack as='a' href='#'>
						<BsTelephone fontSize='18px' />
						<Text fontSize='xs'>Order By Phone 1-877-530-TREE <Text fontSize='10px' as='u'>(Call Center Hours)</Text></Text>
					</HStack>
				</HStack>
				<HStack w='40%' h='20px' color='white' spacing='5' >
					<HStack as='a' href='#'>
						<AiOutlineFieldTime fontSize='18px' />
						<Text fontSize='xs'>Same-Day Delivery</Text>
					</HStack>
					<HStack as='a' href='#'>
						<TbTruckDelivery fontSize='18px' />
						<Text fontSize='xs'>Track Orders</Text>
					</HStack>
					<Image src='https://www.dollartree.com/ccstore/v1/images/?source=/file/general/shop_family_dollar.png&height=30&width=193' />
				</HStack>
			</HStack>
		</Box>
	)
}

export default NavTop
