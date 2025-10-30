import React, { useState } from 'react'

import Header from './components/Header'
import "./App.css"
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './pages/ContactUs';




const App = () => {
   
  return (
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <Header/>
      <Routes>
        <Route  path="/" element={<Landing />}/>
        <Route  path="/ProductDetail" element={<ProductDetail />}/>
        <Route  path="/contactus" element={<ContactUs />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App