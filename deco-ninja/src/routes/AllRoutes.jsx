import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Inventory from '../components/Inventory'
import Login from '../pages/Login'
const AllRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />

   </Routes>
  )
}

export default AllRoutes
