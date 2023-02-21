import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
const theme = extendTheme({
		colors: {
			root: {
				green: "#12823b",
				black: "#000000",
				gray: "#121212",
			},
		},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode='#fafafa' />
			<App />
		</ChakraProvider>
	</BrowserRouter>
);
