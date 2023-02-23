import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
  isNew: true,
  price: 4.5,
  rating: 4.2,
  numReviews: 34
};

interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.2) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews * Math.floor(Math.random() * 10) + 200} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

export default function SlidesCard({ title, price, src }: { title: string, price: number, src: string }) {
  return (
    <Flex p={50} alignItems="center" justifyContent="center"
    >
      <Box
        w='60'
        bg={useColorModeValue('white', 'root.blueGray')}
        maxW="xs"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Box
          backgroundImage={`url(${src})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          w='60'
          h='280px'
          roundedTop="lg"
        >
        </Box>
        <Box p="6"
        >
          <Box display="flex" alignItems="baseline">
            {true && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h5"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center" mt='2'>
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')} mt='3'

            >
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

