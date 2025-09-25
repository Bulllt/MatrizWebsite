import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./style.css";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/matriz",
      label: "Síguenos en Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Osorno, Chile",
    },
    {
      icon: <FaPhone />,
      text: "+56 9 1234 5678",
    },
    {
      icon: <FaEnvelope />,
      text: "contacto@matriz.cl",
    },
  ];

  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerSection">
          <NavLink to="/" className="footerLogo">
            <img src="/logo2.png" alt="Matriz Logo" />
          </NavLink>
        </div>

        <div className="footerSection">
          <h3 className="footerTitle">Síguenos</h3>
          <div className="footerSocials">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialLink"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footerSection">
          <h3 className="footerTitle">Contacto</h3>
          <div className="footerContact">
            {contactInfo.map((contact, index) => (
              <div key={index} className="footerContactItem">
                <span className="footerContactIcon">{contact.icon}</span>
                <span className="footerContactText">{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCopyright">
          © {new Date().getFullYear()} Matriz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
