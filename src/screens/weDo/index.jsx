import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./style.css";

export default function WeDo() {
  const [activeTag, setActiveTag] = useState(null);

  const toggleTag = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  const tagContent = {
    a: {
      title: "Formación artística integral",
      content: [
        "Impulsamos procesos de aprendizaje que acerquen las artes y la gestión cultural a la comunidad en su conjunto.",
        "Talleres y programas formativos en artes visuales y disciplinas afines, dirigidos a niños/as, jóvenes y adultos/as.",
        "Capacitación profesional en gestión cultural y herramientas de sostenibilidad para artistas y agentes culturales.",
      ],
    },
    b: {
      title: "Activación cultural y artística.",
      content: [
        "Buscamos dinamizar la vida cultural a través de la creación y circulación de experiencias artísticas.",
        "Programación de eventos y actividades en colaboración con instituciones públicas y privadas.",
        "Mediación cultural que acerque el arte a públicos diversos, fortaleciendo la participación ciudadana.",
      ],
    },
    c: {
      title: "Encuentros del ecosistema creativo",
      content: [
        "Generamos espacios de intercambio que fomenten la colaboración y el fortalecimiento de redes culturales.",
        "Encuentros, foros y residencias que conecten a artistas, gestores e instituciones.",
        "Plataformas de colaboración interdisciplinaria que promuevan nuevas dinámicas de trabajo y creación.",
      ],
    },
    d: {
      title: "Asesorías en gestión cultural",
      content: [
        "Contribuimos al fortalecimiento del sector artístico-cultural desde la profesionalización y la planificación estratégica.",
        "Asesorías y acompañamiento a artistas, gestores e instituciones en diseño, gestión y evaluación de proyectos",
        "Promoción de la sostenibilidad cultural, incorporando enfoques de financiamiento y modelos de gestión adecuados al territorio.",
      ],
    },
  };

  return (
    <main className="weDoContainer">
      <section className="weDoHero">
        <h1 className="weDoTitle">QUÉ HACEMOS</h1>
        <p className="weDoDescription">
          En Matriz trabajamos para que el arte y la cultura sean motores de
          transformación social. A través de la formación, la mediación y la
          articulación de redes, impulsamos procesos creativos que fortalecen a
          las comunidades y a los agentes culturales. Nuestro quehacer abarca
          desde talleres y programas educativos hasta asesorías y encuentros
          profesionales, siempre con el objetivo de generar experiencias
          significativas, accesibles y sostenibles en el tiempo.
        </p>
      </section>

      <section className="weDoTagsSection">
        <div className="weDoTagsContainer">
          {Object.entries(tagContent).map(([key, content]) => (
            <div key={key} className="weDoTagItem">
              <button
                className={`weDoTagButton ${
                  activeTag === key ? "weDoTagButtonActive" : ""
                }`}
                onClick={() => toggleTag(key)}
              >
                <span className="weDoTagIcon">
                  {activeTag === key ? <FaMinus /> : <FaPlus />}
                </span>
                {content.title}
              </button>

              {activeTag === key && (
                <div className="weDoTagContent">
                  {content.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
