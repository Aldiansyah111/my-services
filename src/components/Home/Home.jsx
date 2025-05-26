import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-card">
        <h1>Welcome to Our Agency</h1>
        <p>Kami menyediakan solusi terbaik untuk kebutuhan bisnis Anda.</p>

        <div className="card-container">
          <div className="card">
            <h3>Desain Profesional</h3>
            <p>Kami buat desain yang menarik dan sesuai brand Anda.</p>
          </div>
          <div className="card">
            <h3>Marketing Digital</h3>
            <p>Strategi digital untuk meningkatkan penjualan Anda.</p>
          </div>
          <div className="card">
            <h3>Dukungan 24/7</h3>
            <p>Tim kami siap membantu kapan saja Anda butuhkan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
