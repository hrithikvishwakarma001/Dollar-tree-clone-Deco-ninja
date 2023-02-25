import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import HelperProvider from "./context/HelperProvider";
const theme = extendTheme({
	colors: {
		root: {
			green: "#12823b",
			black: "#1c1c27",
			gray: "#000000",
			blueGray: "#000000",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode='#fafafa' />
			<HelperProvider>
				<App />
			</HelperProvider>
		</ChakraProvider>
	</BrowserRouter>
);
