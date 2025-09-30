import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./style.css";

export default function Projects() {
  const projects = [
    {
      title: "This is the title",
      date: "Marzo 2024",
      location: "Osorno, Chile",
      image: "/images/a.jpg",
      path: "/proyectos",
    },
    {
      title: "This is other title with more text",
      date: "Enero 2025",
      location: "Osorno, Chile",
      image: "/images/a.jpg",
      path: "/proyectos",
    },
    {
      title: "Hola",
      date: "2025",
      location: "Osorno, Chile",
      image: "/images/a.jpg",
      path: "/proyectos",
    },
  ];

  return (
    <main className="projectsContainer">
      <section className="projectsHero">
        <h1 className="projectsTitle">PROYECTOS</h1>
        <p className="projectsDescription">
          En esta sección compartimos las iniciativas que estamos desarrollando
          junto a artistas, comunidades e instituciones. Cada proyecto busca
          generar un impacto real en el territorio a través de la creatividad,
          la colaboración y la sostenibilidad.
        </p>
      </section>

      <section className="projectsGridSection">
        <div className="projectsGrid">
          {projects.map((project) => (
            <div key={project.title} className="projectCard">
              <NavLink to={project.path} className="projectImageLink">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                />
              </NavLink>

              <div className="projectContent">
                <h4 className="projectTitle">{project.title}</h4>

                <div className="projectMeta">
                  <div className="projectMetaItem">
                    <FaCalendarAlt className="projectMetaIcon" />
                    <span className="projectMetaText">{project.date}</span>
                  </div>

                  <div className="projectMetaItem">
                    <FaMapMarkerAlt className="projectMetaIcon" />
                    <span className="projectMetaText">{project.location}</span>
                  </div>
                </div>

                <NavLink to={project.path} className="projectLink">
                  Ver más
                  <FaArrowRight className="projectLinkIcon" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
