import React from "react";
import "./Fitur.css";  // Bisa pakai style yang sama dengan Product untuk konsistensi

export default function Fitur() {
  return (
    <div className="main-card">
      <h1>Features ⭐</h1>
      <p>
        Fitur-fitur utama yang kami tawarkan dirancang untuk memberikan pengalaman terbaik bagi pengguna dan mendukung pertumbuhan bisnis Anda secara maksimal.
      </p>

      <div className="card-container">
        <div className="card">
          <h3>🎨 User-friendly Design</h3>
          <p>Antarmuka yang mudah digunakan sehingga pelanggan dapat menjelajah dengan nyaman tanpa kebingungan.</p>
        </div>
        <div className="card">
          <h3>📱 Responsive Layout</h3>
          <p>Tampilan yang otomatis menyesuaikan di berbagai perangkat, mulai dari desktop hingga smartphone.</p>
        </div>
        <div className="card">
          <h3>⚡ Fast Loading Time</h3>
          <p>Website dan aplikasi kami dioptimalkan agar cepat diakses tanpa menunggu lama, meningkatkan kepuasan pengguna.</p>
        </div>
      </div>

      <p>
        Dengan fitur-fitur ini, kami siap membantu bisnis Anda tampil profesional dan kompetitif di era digital.
      </p>
    </div>
  );
}
