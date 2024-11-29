import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import Navigation from "./Navigation";
import Home from "./Home";
import Products from "./Products";

import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
