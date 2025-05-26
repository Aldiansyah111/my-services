import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-card">
      <h1>About Us 🚀</h1>
      <p>
        Kami adalah tim profesional dengan pengalaman di bidang digital marketing dan IT.  
        <br />
        <br />
        <strong>Visi kami:</strong> Membantu bisnis Anda tumbuh dengan solusi digital inovatif dan strategi pemasaran yang tepat sasaran.  
        <br />
        <br />
        <strong>Misi kami:</strong>
      </p>
      <ul>
        <li>🔹 Menyediakan layanan terbaik yang berfokus pada hasil.</li>
        <li>🔹 Membangun kemitraan jangka panjang dengan klien.</li>
        <li>🔹 Terus berinovasi dan mengikuti perkembangan teknologi terbaru.</li>
      </ul>
      <p>
        Bersama <span className="highlight">AnAgency</span>, Anda tidak hanya mendapatkan jasa, tapi juga solusi nyata untuk mengembangkan bisnis Anda.
      </p>
    </div>
  );
}
