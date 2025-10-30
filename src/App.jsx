import React, { useState } from 'react'

import Header from './components/Header'
import "./App.css"
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';




const App = () => {
   
  return (
    <BrowserRouter>
      {/* <ScrollToTop/> */}
      <Header/>
      <Routes>
        <Route  path="/" element={<Landing />}/>
        <Route  path="/ProductDetail" element={<ProductDetail />}/>
        <Route  path="/contactus" element={<ContactUs />}/>
        <Route  path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route  path="/terms-conditions" element={<TermsConditions />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App