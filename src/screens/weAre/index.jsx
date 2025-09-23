import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./style.css";

export default function WeAre() {
  const [activeTag, setActiveTag] = useState("equipo");

  const toggleTag = (tag) => {
    if (tag === "equipo") return;
    setActiveTag(activeTag === tag ? null : tag);
  };

  const teamMembers = [
    {
      name: "Catherine Núñez Flos",
      role: "Directora ejecutiva",
      image: "/images/a.jpg",
      path: "/equipo/catherine",
    },
    {
      name: "Eduardo Filun",
      role: "Director programas y formación",
      image: "/images/a.jpg",
      path: "/equipo/eduardo",
    },
    {
      name: "Fernanda González",
      role: "Directora proyectos y territorio",
      image: "/images/a.jpg",
      path: "/equipo/fernanda",
    },
    {
      name: "Gustavo Saldivia Kuschel",
      role: "Patrimonio e investigación",
      image: "/images/a.jpg",
      path: "/equipo/gustavo",
    },
    {
      name: "Matías Toro Nuñez",
      role: "Informática",
      image: "/images/a.jpg",
      path: "/equipo/matias",
    },
  ];

  const tagContent = {
    mision: {
      title: "Misión - Visión",
      content: [
        "Misión: Impulsar el desarrollo de las artes, la cultura y el patrimonio en la zona austral desde un enfoque descentralizado, inclusivo y sostenible. A través de la colaboración multidisciplinaria y la participación activa, fortalecemos capacidades y redes para que las comunidades se empoderen y la creación artística sea motor de transformación social, cohesión e identidad local.",
        "Visión: Ser una plataforma referente en gestión cultural, artística y patrimonial en la zona austral, que democratiza el acceso a herramientas, recursos y espacios de creación. Queremos ser un agente de cambio que fortalezca el ecosistema cultural, impulse la participación activa de las comunidades y genere impactos sociales y culturales sostenibles, posicionando la cultura como eje de la vida de las personas y del territorio.",
      ],
    },
    valores: {
      title: "Valores",
      content: [
        "Colaboración: Creemos en el trabajo conjunto con artistas, comunidades e instituciones, fortaleciendo redes que amplifican el impacto cultural.",
        "Transparencia: Actuamos con claridad y responsabilidad en cada proceso, fomentando la confianza con la comunidad y los socios.",
        "Creatividad: Promovemos la innovación y la experimentación artística como motor de transformación cultural y social.",
        "Sostenibilidad: Impulsamos proyectos culturales que puedan mantenerse en el tiempo, fortaleciendo la profesionalización y el desarrollo económico del sector.",
        "Paridad e Inclusión: Trabajamos con un compromiso real hacia la equidad de género, la diversidad cultural y la participación de distintos grupos sociales.",
        "Interdisciplinariedad: Valoramos el encuentro entre diversas disciplinas, perspectivas y saberes para enriquecer nuestras propuestas culturales.",
        "Compromiso territorial: Reconocemos el valor de la zona austral, potenciando sus identidades locales y promoviendo una cultura descentralizada.",
      ],
    },
    transparencia: {
      title: "Transparencia",
      content: ["hola"],
    },
    equipo: {
      title: "Equipo",
    },
  };

  return (
    <main className="weContainer">
      <section className="weHero">
        <h1 className="weTitle">SOMOS</h1>
        <p className="weDescription">
          Somos una corporación sin fines de lucro nacida en 2025 en la zona
          austral de Chile. Trabajamos para fortalecer el ecosistema cultural a
          través de la formación, la activación artística y la colaboración con
          comunidades e instituciones. <br />
          Nuestro equipo multidisciplinario une artes, gestión y patrimonio para
          impulsar proyectos sostenibles que acerquen la cultura a las personas
          y generen impacto social y territorial. Creemos en la creatividad como
          motor de transformación y en la colaboración como base para construir
          un futuro cultural más diverso, inclusivo y sostenible.
        </p>
      </section>

      <section className="weTagsSection">
        <div className="weTagsContainer">
          {Object.entries(tagContent).map(([key, content]) => (
            <div key={key} className="weTagItem">
              <button
                className={`weTagButton ${
                  activeTag === key ? "weTagButtonActive" : ""
                }`}
                onClick={() => toggleTag(key)}
              >
                {key !== "equipo" && (
                  <span className="weTagIcon">
                    {activeTag === key ? <FaMinus /> : <FaPlus />}
                  </span>
                )}
                {content.title}
              </button>

              {(activeTag === key || key === "equipo") && (
                <div className="weTagContent">
                  {key === "equipo" ? (
                    <>
                      <div className="weTeamGrid">
                        {teamMembers.map((member, index) => (
                          <div key={index} className="weTeamMember">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="weTeamImage"
                            />
                            <h3 className="weTeamName">{member.name}</h3>
                            <p className="weTeamRole">{member.role}</p>
                            <NavLink
                              to={member.path}
                              className="weMemberButton"
                            >
                              Ver más
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    content.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
