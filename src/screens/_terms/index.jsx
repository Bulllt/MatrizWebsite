import React from "react";
import "./style.css";

export default function Terms() {
  return (
    <section className="legalContainer">
      <h1 className="legalTitle">Términos de Servicio</h1>
      <p className="legalUpdated">
        Última actualización: 19 de noviembre de 2026
      </p>

      <div className="legalSection">
        <h2>1. Quiénes somos</h2>
        <p>
          Este sitio web y las herramientas asociadas son operados por Matriz,
          corporación sin fines de lucro con domicilio en Osorno, Chile. Para
          consultas, escríbenos a{" "}
          <a href="mailto:contacto@matriz.cl">contacto@matriz.cl</a>.
        </p>
      </div>

      <div className="legalSection">
        <h2>2. Descripción del servicio</h2>
        <p>
          Matriz utiliza una herramienta interna para preparar y publicar
          contenido audiovisual propio en redes sociales, incluyendo TikTok,
          Instagram y YouTube, mediante las interfaces (APIs) oficiales de cada
          plataforma. Actualmente la herramienta es de uso interno y no está
          abierta al público general.
        </p>
      </div>

      <div className="legalSection">
        <h2>3. Uso autorizado</h2>
        <ul>
          <li>
            Solo el personal autorizado de Matriz puede conectar cuentas y
            publicar contenido a través de la herramienta.
          </li>
          <li>
            El contenido publicado debe cumplir la ley chilena y las normas de
            cada plataforma, incluidas las Condiciones de Servicio y las
            Directrices de la Comunidad de TikTok, Instagram y YouTube.
          </li>
          <li>
            Está prohibido usar la herramienta para publicar contenido ilegal,
            engañoso, que infrinja derechos de terceros o que vulnere las normas
            de las plataformas.
          </li>
        </ul>
      </div>

      <div className="legalSection">
        <h2>4. Cuentas de terceros y autorizaciones</h2>
        <p>
          La conexión con TikTok se realiza mediante autorización explícita
          (OAuth) de la cuenta correspondiente. Esa autorización puede ser
          revocada en cualquier momento desde la configuración de la cuenta de
          la plataforma, o solicitándonos la desconexión por correo.
        </p>
      </div>

      <div className="legalSection">
        <h2>5. Contenido generado con inteligencia artificial</h2>
        <p>
          Parte del contenido audiovisual puede ser generado o asistido por
          herramientas de inteligencia artificial. Cuando la plataforma lo
          permita, indicaremos que el contenido es generado por IA, conforme a
          sus políticas.
        </p>
      </div>

      <div className="legalSection">
        <h2>6. Propiedad intelectual</h2>
        <p>
          Los contenidos, marcas y materiales de Matriz son de su propiedad o se
          usan con autorización. Las marcas de terceros (TikTok, Instagram,
          YouTube, entre otras) pertenecen a sus respectivos titulares, y no
          existe afiliación ni respaldo oficial de estas empresas hacia Matriz.
        </p>
      </div>

      <div className="legalSection">
        <h2>7. Disponibilidad y limitación de responsabilidad</h2>
        <p>
          La herramienta se ofrece «tal cual». Dependemos de servicios de
          terceros, por lo que no garantizamos disponibilidad continua ni
          ausencia de errores. En la medida permitida por la ley, Matriz no será
          responsable por daños indirectos derivados del uso del sitio o de
          cambios, interrupciones o restricciones impuestas por las plataformas.
        </p>
      </div>

      <div className="legalSection">
        <h2>8. Cambios a estos términos</h2>
        <p>
          Podemos actualizar estos términos. La versión vigente será siempre la
          publicada en esta página, con su fecha de actualización.
        </p>
      </div>

      <div className="legalSection">
        <h2>9. Ley aplicable y contacto</h2>
        <p>
          Estos términos se rigen por las leyes de la República de Chile. Para
          cualquier consulta, contáctanos en{" "}
          <a href="mailto:contacto@matriz.cl">contacto@matriz.cl</a>.
        </p>
      </div>
    </section>
  );
}
