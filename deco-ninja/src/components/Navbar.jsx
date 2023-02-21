import { Container } from '@chakra-ui/react'
import React from 'react'
import NavFoot from '../utils/NavFoot';
import NavMid from '../utils/NavMid';
import NavTop from '../utils/NavTop';

const Navbar = () => {
  return <Container
    p='0'
    w="100%"
    maxW='full'
    >
   <NavTop/>
   <NavMid/>
   <NavFoot/>
  </Container>;
}

export default Navbar
