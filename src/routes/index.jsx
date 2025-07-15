import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem('token') // ou outra forma de autenticação
  return token ? children : <Navigate to="/" />
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
