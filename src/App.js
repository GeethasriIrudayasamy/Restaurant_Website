import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ContactPage from "./Components/Pages/ContactPage";
import HomePage from "./Components/Pages/HomePage";
import MenuPage from "./Components/Pages/MenuPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default App;
