import { Box, useColorModeValue } from '@chakra-ui/react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <Box
    w='100%'
    // border={'1px solid red'}
    bg={useColorModeValue('white','root.gray')}
    >
    <Navbar/>
    <Home/>
    </Box>
  )
}

export default App
