import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Product from "./components/Product/Product";
import Fitur from "./components/Fitur/Fitur";
import PaketHarga from "./components/PaketHarga/PaketHarga";
import FAQ from "./components/FAQ/FAQ";
import Testimoni from "./components/Testimoni/Testimoni";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "20px", maxWidth: 1000, margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/paket-harga" element={<PaketHarga />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimoni" element={<Testimoni />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
