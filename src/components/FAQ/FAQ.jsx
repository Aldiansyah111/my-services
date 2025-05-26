import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Berapa lama biasanya waktu pengerjaan proyek?",
    answer: "Biasanya antara 2-4 minggu tergantung tingkat kompleksitas proyek."
  },
  {
    question: "Apakah saya bisa meminta revisi setelah proyek selesai?",
    answer: "Tentu, kami menyediakan revisi sesuai paket yang dipilih."
  },
  {
    question: "Apakah layanan SEO termasuk dalam paket standar?",
    answer: "Ya, paket standar sudah termasuk optimasi SEO dasar."
  },
  {
    question: "Apakah bisa membuat aplikasi mobile untuk iOS dan Android?",
    answer: "Bisa, kami menyediakan layanan pengembangan aplikasi mobile untuk kedua platform."
  },
  {
    question: "Apakah Anda menyediakan layanan dukungan setelah proyek selesai?",
    answer: null // Jawaban optional, tidak tampil jika null
  },
  {
    question: "Bagaimana cara pembayaran untuk layanan Anda?",
    answer: "Pembayaran bisa dilakukan via transfer bank, e-wallet, atau metode lain yang disepakati."
  },
  {
    question: "Apakah website yang dibuat responsif untuk perangkat mobile?",
    answer: "Semua website yang kami buat responsif dan dioptimalkan untuk mobile."
  },
  {
    question: "Bisakah saya meminta fitur khusus yang tidak tercantum di paket?",
    answer: "Tentu, kami dapat menyesuaikan fitur sesuai kebutuhan Anda dengan penawaran harga khusus."
  },
  {
    question: "Apakah ada garansi untuk layanan Anda?",
    answer: "Kami memberikan garansi perbaikan bug selama 30 hari setelah proyek selesai."
  },
  {
    question: "Bagaimana jika saya ingin konsultasi sebelum mulai proyek?",
    answer: null // Jawaban optional
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="main-card">
      <h1>Frequently Asked Questions ❓</h1>
      <p>Temukan jawaban dari pertanyaan umum terkait layanan kami.</p>

      <div className="card-container-faq">
        {faqs.map((faq, index) => (
          <div
            className={`card-faq ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-header">
              <h3 className="faq-question">{faq.question}</h3>
              <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>▶</span>
            </div>
            {openIndex === index && faq.answer && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
