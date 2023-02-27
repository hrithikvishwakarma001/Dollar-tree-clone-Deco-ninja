import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Inventory from "../components/Inventory";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ScrollTopButton from "../utils/ScrollTopButton";
import AdminPage from "../pages/AdminPage";
const AllRoutes = () => {
	return (
		<>
      <ScrollTopButton/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/inventory' element={<Inventory />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/admin' element={<AdminPage />} />
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	);
};

export default AllRoutes;
