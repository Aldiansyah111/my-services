import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaBriefcase,
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";
import "./Contact.css";

const contacts = [
  {
    id: 1,
    type: "Email",
    value: "contact@agencyname.com",
    icon: <FaEnvelope />,
    link: "mailto:contact@agencyname.com",
  },
  {
    id: 2,
    type: "LinkedIn",
    value: "linkedin.com/in/agencyname",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/agencyname",
  },
  {
    id: 3,
    type: "GitHub",
    value: "github.com/agencyname",
    icon: <FaGithub />,
    link: "https://github.com/agencyname",
  },
  {
    id: 4,
    type: "Instagram",
    value: "@agencyname",
    icon: <FaInstagram />,
    link: "https://instagram.com/agencyname",
  },
  {
    id: 5,
    type: "WhatsApp",
    value: "+62 812 3456 7890",
    icon: <FaWhatsapp />,
    link: "https://wa.me/6281234567890",
  },
  {
    id: 6,
    type: "Fiverr",
    value: "fiverr.com/agencyname",
    icon: <SiFiverr />,
    link: "https://www.fiverr.com/agencyname",
  },
  {
    id: 7,
    type: "Upwork",
    value: "upwork.com/fl/agencyname",
    icon: <SiUpwork />,
    link: "https://www.upwork.com/fl/agencyname",
  },
  {
    id: 8,
    type: "Freelancer",
    value: "freelancer.com/u/agencyname",
    icon: <SiFreelancer />,
    link: "https://www.freelancer.com/u/agencyname",
  },
];

export default function Contact() {
  return (
    <div className="main-card" style={{ marginTop: "50px" }}>
      <h1>Contact Us 📞</h1>
      <div className="card-container" style={{ justifyContent: "flex-start" }}>
        {contacts.map(({ id, type, value, icon, link }) => (
          <a
            key={id}
            href={link}
            className="card contact-card"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "350px", textDecoration: "none" }}
          >
            <div className="icon-wrapper">{icon}</div>
            <div>
              <p className="contact-type">{type}</p>
              <p className="contact-value">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
