import React from "react";
import "./Product.css";

export default function Product() {
  return (
      <div className="main-card">
        <h1>Our Products 🛠️</h1>
        <p>
          Kami menyediakan berbagai layanan profesional untuk membantu bisnis Anda berkembang dan beradaptasi dengan kebutuhan digital saat ini.
        </p>

        <div className="card-container">
          <div className="card">
            <h3>🌐 Website Development</h3>
            <p>Desain dan bangun website modern yang responsif dan user-friendly.</p>
          </div>
          <div className="card">
            <h3>📱 Mobile App</h3>
            <p>Aplikasi mobile custom untuk iOS dan Android yang meningkatkan engagement pelanggan.</p>
          </div>
          <div className="card">
            <h3>🔍 SEO Services</h3>
            <p>Optimasi mesin pencari agar website Anda mudah ditemukan dan meningkatkan traffic organik.</p>
          </div>
        </div>

        <p>
          Semua produk kami dikembangkan dengan fokus pada kualitas dan hasil yang nyata.
        </p>
      </div>
  );
}
