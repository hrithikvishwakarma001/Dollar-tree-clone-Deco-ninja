import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Inventory from '../components/Inventory'
import Product from '../components/Product'
import Login from '../pages/Login'
const AllRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/:id" element={<Product />} />
      <Route path="*" element={<h1>404</h1>} />

   </Routes>
  )
}

export default AllRoutes
