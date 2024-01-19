// Layout.jsx
import React from "react";
import Header from "./Header.jsx";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Home from "./Home.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
