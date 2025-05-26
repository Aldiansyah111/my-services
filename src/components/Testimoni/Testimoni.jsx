import React from "react";
import "./Testimoni.css"; // styling konsisten
import client1 from '../../assets/img/team/img_01.png'
import client2 from '../../assets/img/team/img_02.png'
import client3 from '../../assets/img/team/img_03.png'
import client4 from '../../assets/img/team/img_04.png'
import client5 from '../../assets/img/team/team_04.png'
import client6 from '../../assets/img/team/team_03.png'
import client7 from '../../assets/img/team/team_02.png'
import client8 from '../../assets/img/team/team_01.png'
import client9 from '../../assets/img/team/team_01.png'
import client10 from '../../assets/img/team/team_01.png'


// Contoh import gambar asli nanti:
// import client1 from '../assets/client1.jpg';

const testimonials = [
  { id: 1, image: client1, name: "Client A", feedback: "Great service and fast delivery!" },
  { id: 2, image: client2, name: "Client B", feedback: "Highly recommend this agency." },
  { id: 3, image: client3, name: "Client C", feedback: "Professional and reliable team." },
  { id: 4, image: client4, name: "Client D", feedback: "Exceeded our expectations." },
  { id: 5, image: client5 , name: "Client E", feedback: "Creative solutions and great support." },
  { id: 6, image: client6, name: "Client F", feedback: "On time and within budget." },
  { id: 7, image: client7, name: "Client G", feedback: "Clear communication throughout the project." },
  { id: 8, image: client8, name: "Client H", feedback: "Our go-to digital marketing partner." },
  // { id: 9, image: client9, name: "Client I", feedback: "Top-notch quality and service." },
  // { id: 10, image: client10, name: "Client J", feedback: "Very satisfied with the results." },
  // { id: 11, image: "xxxx", name: "Client K", feedback: "They really understand our needs." },
  // { id: 12, image: "xxxx", name: "Client L", feedback: "Friendly and professional team." },
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
