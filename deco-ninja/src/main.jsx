import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import HelperProvider from "./context/HelperProvider";
const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};
const theme = extendTheme({
	config,
	colors: {
		root: {
			green: "#12823b",
			black: "#13131b",
			gray: "#000000",
			blueGray: "#000000",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<HelperProvider>
				<App />
			</HelperProvider>
		</ChakraProvider>
	</BrowserRouter>
);
