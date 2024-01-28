
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

import Footer from './user/components/Footer/Footer'

import Navbar from './user/components/Navbar/Navbar'
import Product from './user/components/Product/Product'
import ProductDetails from './user/components/ProductDetails/ProductDetails'
import HomePage from './user/pages/HomePage'
import productData from './user/productData'
import ProductPage from './user/pages/ProductPage'
import ProductDetailsPage from './user/pages/ProductDetailsPage'
import Cart from './user/components/Cart/Cart'
import Stepper from './user/components/CheckOut.jsx/Stepper'
import CartPage from './user/pages/CartPage'
import Order from './user/components/Order.jsx/Order'
import OrderDetails from './user/components/Order.jsx/OrderDetails'
import { MenuProvider } from './user/components/ContextProvider/MenuContext'

import AboutUsPage from './user/pages/AboutUsPage'
import LoginPage from './user/pages/LoginPage'
import Dashboard from './Admin/pages/Dashboard'
import Users from './Admin/pages/Users'
import Orders from './Admin/pages/Orders'
import AllProductsPage from './Admin/pages/AllProductsPage'
import AddProductPage from './Admin/pages/AddProductPage'
import HeroSectionManagerPage from './Admin/pages/HeroSectionManagerPage'
import NotificationPage from './Admin/pages/NotificationPage'
import SignUpPage from './user/pages/SignUpPage'
import ContactUsPage from './user/pages/ContactUsPage'






function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      
      <MenuProvider>
     <Routes>
      
      <Route path="/"  element={<HomePage />}></Route>
      <Route path="/admin"  element={<Dashboard />}></Route>
      <Route path="/admin/users"  element={<Users />}></Route>
      <Route path="/admin/orders"  element={<Orders/>}></Route>
      <Route path="/admin/products"  element={<AllProductsPage/>}></Route>
      <Route path="/admin/add-product"  element={<AddProductPage/>}></Route>
      <Route path="/admin/notification"  element={<NotificationPage/>}></Route>
      <Route path="/admin/hero-section-manager"  element={<HeroSectionManagerPage/>}></Route>




      
        
        
      <Route path="/signin" element = {<LoginPage  setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element = {<SignUpPage  setIsLoggedIn={setIsLoggedIn} />} />

      
      

        <Route path="/products" element={<ProductPage/>}></Route>
        {/* <Route path="/products/:categoryId/:subcategoryId" element={<ProductPage/>}></Route> */}

        <Route path="/about-us" element={<AboutUsPage/>}></Route>
        <Route path="/contact-us" element={<ContactUsPage/>}></Route>




        

   
        
         <Route path="/product-details/:productId" element={<ProductDetailsPage/>} />
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/checkout" element={<Stepper/>}></Route> 
      
         
      </Routes>  
      </MenuProvider>
      {/* <Dashboard/>
      <Users/> */}
      {/* <Route path="/users" element={<Users/>} >
              
              
              
            </Route> */}
      
      <Footer/>

   
      
    </>
  )
}

export default App
