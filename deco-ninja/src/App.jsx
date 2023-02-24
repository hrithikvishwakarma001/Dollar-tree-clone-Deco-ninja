import { Box, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
	return (
		<Box w='100%' bg={useColorModeValue("white", "root.black")}>
			<Navbar />
			<AllRoutes/>
			<Footer />
		</Box>
	);
}

export default App;
