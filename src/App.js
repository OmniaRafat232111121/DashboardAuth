import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/auth/Login'
import PrivateRoutes from './utils/PrivateRoutes'
const App = () => {
const isAuth = useSelector(state => state?.authSlice?.user?.isAuth)
console.log(isAuth)
  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path='/*' element={<Layout />} />
        </Route>
        <Route path='/login' element={isAuth ? <Layout/> : <Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

  // email: Yup.string().email('Invalid email').required('Required'),
  // password: Yup
  // .string()
  // .min(8, 'Password must be 8 characters long')
  // .matches(/[0-9]/, 'Password requires a number')
  // .matches(/[a-z]/, 'Password requires a lowercase letter')
  // .matches(/[A-Z]/, 'Password requires an uppercase letter')
  // .matches(/[^\w]/, 'Password requires a symbol'),