import React from "react";
import "./PaketHarga.css";

export default function PaketHarga() {
  return (
    <div className="main-card">
      <h1>Packages & Pricing 💼</h1>
      <p>
        Pilih paket layanan yang sesuai dengan kebutuhan bisnis Anda. Kami menawarkan solusi yang fleksibel dengan harga kompetitif.
      </p>

      <div className="card-container">
        <div className="card">
          <h3>🟢 Basic Package</h3>
          <p>Harga: $100</p>
          <p>Paket dasar untuk memulai kehadiran online Anda dengan website sederhana dan dukungan standar.</p>
        </div>
        <div className="card">
          <h3>🔵 Standard Package</h3>
          <p>Harga: $250</p>
          <p>Paket lengkap dengan website responsif, optimasi SEO dasar, dan integrasi media sosial.</p>
        </div>
        <div className="card">
          <h3>🟣 Premium Package</h3>
          <p>Harga: $500</p>
          <p>Paket terbaik dengan fitur lengkap, aplikasi mobile, SEO lanjutan, dan dukungan prioritas 24/7.</p>
        </div>
      </div>

      <p>
        Semua paket kami dikembangkan dengan fokus pada kualitas, hasil nyata, dan kepuasan pelanggan.
      </p>
    </div>
  );
}
