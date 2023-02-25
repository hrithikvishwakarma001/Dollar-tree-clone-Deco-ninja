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
  Code,
  useToast,
  Button,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import SinglePageModal from './SinglePageModal';

const data = {
  rating: Math.floor(Math.random() * 5) + 1,
  numReviews: 34
};
interface RatingProps {
  rating: number;
  numReviews: number;
}

export function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center"
      mt={numReviews == 1 ? '0.3rem' : '3'}
    >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i + Math.random()}
                style={{ marginLeft: '1' }}
              // color={i < rating ? 'green.500' :"green.300"}
              />
            );
          }
          if (roundedRating - i === 0.2) {
            return <BsStarHalf key={i + Math.random()} style={{ marginLeft: '1', }} />;
          }
          return <BsStar key={i + Math.random()} style={{ marginLeft: '1', }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm"
        display={numReviews == 1 ? 'none' : 'flex'}
      >
        {numReviews * Math.floor(Math.random() * 10) + 200}
      </Box>
    </Box>
  );
}
type articalCode = string;
export default function SlidesCard({ title, price, src, padding, singleData }: { title: string, price: number, src: string, padding?: number | string, singleData: any }) {
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const randomBolean = () => Math.random() >= 0.5;
  const cart = localStorage.getItem('cart')
  const addToLocalStorage = (product: any) => {

    if (cart) {
      const cartObj = JSON.parse(cart);
      const newCart = [...cartObj, product];
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
    toast({
      title: "Product added to cart",
      description: "We've added the product to your cart",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
    setShow(true);
}
return (
  <Flex p={padding ? padding : 50} alignItems="center" justifyContent="center"
  >
    <Box
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      boxShadow={useColorModeValue("lg", "lg")}
      _hover={{
        transform: "translateY(-5px)",
        transition: "all 0.2s ease-out",
        boxShadow: "0 10px 50px -20px #b0c4de",
      }}
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
        h='290px'
        roundedTop="lg"
      >
      </Box>
      <Box p="4"
      >
        <Box display="flex" alignItems="baseline">
          {randomBolean() ? (
            <Badge rounded="full" fontSize="0.7em" colorScheme="green">
              New
            </Badge>
          ) : (
            <Badge rounded="full" fontSize="0.7em" colorScheme="red">
              Trending
            </Badge>
          )}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center"
        alignItems={'center'}
        >
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
            label={!show? 'Added to cart' : 'Item already in cart'}
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1em'}>
            <Button display={'flex'}
              justifyContent={'center'}
              p='0'
              bg='none'
              _hover={{ bg: 'none' }}
              isDisabled={show}
              onClick={() => addToLocalStorage(singleData)}
              cursor={'pointer'}
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'}
                />
            </Button>
          </Tooltip>
        </Flex>
        <Flex justifyContent="space-between" alignContent="center" >
          <Rating rating={randomBolean() ? data.rating : (Math.floor(Math.random() * 5) + 1)} numReviews={data.numReviews} />
          <Code fontSize="md" color={useColorModeValue('gray.800', 'black')} mt='3'
            fontWeight="bold"
            bg={useColorModeValue('yellow.100', 'yellow.200')}
            letterSpacing={0}
            fontFamily={'caveat'}
          >
            {price}
          </Code>
        </Flex>
        <SinglePageModal product={singleData} />
      </Box>
    </Box>
  </Flex>
);
}

