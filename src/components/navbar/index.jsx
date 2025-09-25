import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import "./style.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        const isHamburgerClick = event.target.closest(".navbarToggle");
        if (!isHamburgerClick) {
          closeMenu();
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
        <img src="/logo.png" alt="Logo" />
      </NavLink>

      <div
        ref={sidebarRef}
        className={`navbarLinks ${isMenuOpen ? "navbarLinksActive" : ""}`}
      >
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
