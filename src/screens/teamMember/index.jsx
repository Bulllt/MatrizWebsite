import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./style.css";

export default function TeamMember() {
  const { memberId } = useParams();

  const teamMembersData = {
    catherine: {
      name: "Catherine Núñez Flos",
      role: "Directora ejecutiva",
      image: "/images/a.jpg",
      description:
        "Licenciada en Artes Visuales, Diplomada en curaduría y Magíster en Gestión Cultural (c) por la Universidad de Buenos Aires. Profesional con amplia experiencia en curaduría y mediación de exposiciones, así como en el desarrollo de estudios de públicos y estrategias comunicacionales. Ha liderado proyectos que fomentan la participación comunitaria y fortalecen los vínculos entre espacios culturales, instituciones educativas y comunidades locales. Además, se dedica a la realización de talleres para infancias, promoviendo el desarrollo creativo y educativo de los más jóvenes a través del arte.",
    },
    eduardo: {
      name: "Eduardo Filun",
      role: "Director programas y formación",
      image: "/images/a.jpg",
      description:
        "Licenciado en Artes Visuales. Artista visual y docente. Su trayectoria profesional se ha centrado en el ámbito de la producción artística, desarrollando y presentando proyectos de creación en diversos espacios de exhibición. Paralelamente ha guiado instancias de mediación artística y se ha desempeñado como docente de artes visuales. Su práctica, desde una perspectiva descentralizada, se concibe bajo la integración de la creación junto a la difusión del arte contemporáneo.",
    },
    fernanda: {
      name: "Fernanda González",
      role: "Directora proyectos y territorio",
      image: "/images/a.jpg",
      description:
        "Licenciada en Turismo y Cultura, Diplomada en Gobiernos locales transformadores. Especialista en el diseño y ejecución de proyectos comunitarios, con experiencia en la creación de iniciativas que fortalecen el vínculo entre las comunidades y su entorno cultural. Su enfoque combina una visión estratégica con un compromiso por la participación ciudadana, promoviendo el desarrollo cultural y social a nivel local.",
    },
    gustavo: {
      name: "Gustavo Saldivia Kuschel",
      role: "Patrimonio e investigación",
      image: "/images/a.jpg",
      description:
        "Licenciado y profesor de Historia y Ciencias Sociales, Diplomado en Derecho a la ciudad y producción social del espacio, Magíster en Historia Argentina y Latinoamérica (c) por la Universidad de Buenos Aires. Especialista en historia reciente, con un enfoque particular en las infancias, el territorio y el patrimonio local. Su trayectoria combina una sólida formación académica con el compromiso por comprender y abordar las dinámicas sociales y culturales desde una perspectiva histórica crítica y contextualizada.",
    },
    matias: {
      name: "Matías Toro Nuñez",
      role: "Informática",
      image: "/images/a.jpg",
      description:
        "Ingeniero en Informática en formación. Su trabajo se enfoca en el diseño e implementación de plataformas digitales innovadoras y accesibles, orientadas a potenciar la interacción y el alcance de instituciones culturales. Actualmente, lidera el diseño web de Corporación Matriz, desarrollando soluciones tecnológicas que integran creatividad y funcionalidad para fortalecer la gestión cultural en entornos digitales.",
    },
  };

  const member = teamMembersData[memberId];

  if (!member) {
    return (
      <main className="teamContainer">
        <div className="teamContent">
          <NavLink to={-1} className="teamBackButton">
            <FaArrowLeft />
            VOLVER
          </NavLink>
          <div className="teamError">
            <h1>Miembro no encontrado</h1>
            <p>El miembro del equipo que buscas no existe.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="teamContainer">
      <div className="teamContent">
        <NavLink to={-1} className="teamBackButton">
          <FaArrowLeft />
          VOLVER
        </NavLink>

        {/* Member Content */}
        <div className="teamMemberCard">
          <div className="teamMemberImageSection">
            <img
              src={member.image}
              alt={member.name}
              className="teamMemberImage"
            />
          </div>

          <div className="teamMemberInfo">
            <h1 className="teamMemberName">{member.name}</h1>
            <h2 className="teamMemberRole">{member.role}</h2>

            <div className="teamMemberDescription">
              <p>{member.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
