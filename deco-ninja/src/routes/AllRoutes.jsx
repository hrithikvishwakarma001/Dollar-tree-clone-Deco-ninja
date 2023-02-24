import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../pages/Login'
const AllRoutes = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
   </Routes>
  )
}

export default AllRoutes
