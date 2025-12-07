import React from 'react'; // Added React import for consistency
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import AboutUs from "./Pages/Aboutus";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShopWomen from "./Pages/ShopForWomen";
import ShopMen from "./Pages/ShopForMen";
import ShopChildren from "./Pages/ShopForChildren";
import ShopAccessories from "./Pages/ShopForAccessories";
import ProductPage from "./Pages/ProductPage"; // Route for individual product pages

// --- 1. IMPORT THE CHECKOUT PAGE ---
import CheckoutPage from "./Pages/CheckoutPage"; // Ensure this path is correct
import CustomOrder from './Pages/CustomOrder';
import RefundPolicy from './Pages/RefundPolicy';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/custom" element={<CustomOrder />} />
        <Route path="/refund" element={<RefundPolicy />} />



        {/* Category Routes */}
        <Route path="/category/men" element={<ShopMen />} />
        <Route path="/category/women" element={<ShopWomen />} />
        <Route path="/category/children" element={<ShopChildren />} />
        <Route path="/category/accessories" element={<ShopAccessories />} />

        {/* Individual Product Route */}
        <Route path="/product/:id" element={<ProductPage />} />

        {/* ------------------------------------------- */}
        {/* 2. ADD THE NEW CHECKOUT ROUTE HERE! */}
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* ------------------------------------------- */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;