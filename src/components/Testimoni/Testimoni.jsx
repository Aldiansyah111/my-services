import React from "react";
import "./Testimoni.css"; // styling konsisten

// Contoh import gambar asli nanti:
// import client1 from '../assets/client1.jpg';

const testimonials = [
  { id: 1, image: "xxxx", name: "Client A", feedback: "Great service and fast delivery!" },
  { id: 2, image: "xxxx", name: "Client B", feedback: "Highly recommend this agency." },
  { id: 3, image: "xxxx", name: "Client C", feedback: "Professional and reliable team." },
  { id: 4, image: "xxxx", name: "Client D", feedback: "Exceeded our expectations." },
  { id: 5, image: "xxxx", name: "Client E", feedback: "Creative solutions and great support." },
  { id: 6, image: "xxxx", name: "Client F", feedback: "On time and within budget." },
  { id: 7, image: "xxxx", name: "Client G", feedback: "Clear communication throughout the project." },
  { id: 8, image: "xxxx", name: "Client H", feedback: "Our go-to digital marketing partner." },
  { id: 9, image: "xxxx", name: "Client I", feedback: "Top-notch quality and service." },
  { id: 10, image: "xxxx", name: "Client J", feedback: "Very satisfied with the results." },
  { id: 11, image: "xxxx", name: "Client K", feedback: "They really understand our needs." },
  { id: 12, image: "xxxx", name: "Client L", feedback: "Friendly and professional team." },
];

export default function Testimoni() {
  return (
    <div className="main-card">
      <h1>Testimonials 🗣️</h1>
      <div className="card-container">
        {testimonials.map(({ id, image, name, feedback }) => (
          <div className="card" key={id}>
            <div className="image-wrapper">
              <img src={image} alt={`${name} profile`} className="client-image" />
            </div>
            <p className="feedback">"{feedback}"</p>
            <p className="client-name">- {name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
