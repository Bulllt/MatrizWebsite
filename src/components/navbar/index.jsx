import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import "./style.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Somos", path: "/somos" },
    { name: "Qué hacemos", path: "/queHacemos" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="navbarContainer">
      <NavLink to={"/"} className="navbarLogo">
        <img src="/vite.svg" alt="Logo" />
      </NavLink>

      <div className={`navbarLinks ${isMenuOpen ? "navbarLinksActive" : ""}`}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "navbarLink navbarLinkActive" : "navbarLink"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        <div className="navbarSidebarFooter">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbarInstagramLink"
          >
            <FaInstagram className="navbarInstagramIcon" />
          </a>
          <p className="navbarLocation">Osorno, Chile</p>
        </div>
      </div>

      <div className="navbarToggle" onClick={toggleMenu}>
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </div>
    </nav>
  );
}
