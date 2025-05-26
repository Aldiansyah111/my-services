// import React from "react";
// import { NavLink } from "react-router-dom";

// const linkStyle = {
//   margin: "0 10px",
//   textDecoration: "none",
//   color: "#333",
//   fontWeight: "500"
// };

// const activeStyle = {
//   color: "#007bff",
//   fontWeight: "700",
// };

// export default function Navbar() {
//   return (
//     <nav style={{
//       borderBottom: "1px solid #ddd",
//       padding: "10px 20px",
//       backgroundColor: "#f8f9fa",
//       display: "flex",
//       justifyContent: "space-between", // space antara logo dan nav links
//       alignItems: "center",
//       flexWrap: "wrap"
//     }}>
//       {/* Logo sebelah kiri */}
//       <div style={{
//         fontWeight: "700",
//         fontSize: "1.5rem",
//         color: "#007bff",
//         cursor: "pointer",
//         userSelect: "none"
//       }}>
//         AnAgency
//       </div>

//       {/* Menu navigasi sebelah kanan */}
//       <div>
//         <NavLink to="/" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)} end>Home</NavLink>
//         <NavLink to="/about" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>About</NavLink>
//         <NavLink to="/product" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>Product</NavLink>
//         <NavLink to="/fitur" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>Fitur</NavLink>
//         <NavLink to="/paket-harga" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>Paket & Harga</NavLink>
//         <NavLink to="/faq" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>FAQ</NavLink>
//         <NavLink to="/testimoni" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>Testimoni</NavLink>
//         <NavLink to="/contact" style={({ isActive }) => (isActive ? {...linkStyle, ...activeStyle} : linkStyle)}>Contact</NavLink>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">AnAgency</div>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
      </div>

      {/* Navigation */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Product</NavLink>
        <NavLink to="/fitur" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Fitur</NavLink>
        <NavLink to="/paket-harga" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Paket & Harga</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>FAQ</NavLink>
        <NavLink to="/testimoni" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Testimoni</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}
