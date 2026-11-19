import React from "react";
import "./style.css";

export default function Privacy() {
  return (
    <section className="legalContainer">
      <h1 className="legalTitle">Política de Privacidad</h1>
      <p className="legalUpdated">
        Última actualización: 19 de noviembre de 2026
      </p>

      <div className="legalSection">
        <h2>1. Responsable</h2>
        <p>
          Matriz, corporación sin fines de lucro con domicilio en Osorno, Chile,
          es la responsable del tratamiento de los datos descritos en esta
          política. Contacto:{" "}
          <a href="mailto:contacto@matriz.cl">contacto@matriz.cl</a>.
        </p>
      </div>

      <div className="legalSection">
        <h2>2. Datos que recopilamos</h2>
        <ul>
          <li>
            <strong>Datos de contacto:</strong> nombre, correo u otros datos que
            nos envíes voluntariamente al escribirnos.
          </li>
          <li>
            <strong>Datos de la integración con TikTok:</strong> al autorizar la
            conexión, recibimos un identificador de la cuenta, el nombre de
            usuario y los tokens de acceso necesarios para publicar en nombre de
            la cuenta autorizada.
          </li>
          <li>
            <strong>Contenido publicado:</strong> los videos, textos y metadatos
            que preparamos y publicamos desde la herramienta, y el estado de
            cada publicación.
          </li>
        </ul>
      </div>

      <div className="legalSection">
        <h2>3. Para qué usamos los datos</h2>
        <ul>
          <li>Publicar contenido en las cuentas que nos autorizan.</li>
          <li>Registrar el estado de las publicaciones y resolver errores.</li>
          <li>Responder consultas recibidas por los canales de contacto.</li>
        </ul>
        <p>
          No vendemos ni compartimos tus datos con terceros con fines
          publicitarios.
        </p>
      </div>

      <div className="legalSection">
        <h2>4. Servicios de terceros</h2>
        <p>
          Para operar usamos proveedores como TikTok, Instagram (Meta), YouTube
          (Google), alojamiento web y almacenamiento en la nube. Estos servicios
          tratan datos según sus propias políticas de privacidad, que te
          recomendamos revisar.
        </p>
      </div>

      <div className="legalSection">
        <h2>5. Conservación y seguridad</h2>
        <p>
          Conservamos los datos solo el tiempo necesario para los fines
          descritos. Los tokens de acceso se almacenan de forma protegida y se
          eliminan al revocar la autorización o al solicitarlo. Aplicamos
          medidas razonables de seguridad, aunque ningún sistema es
          completamente infalible.
        </p>
      </div>

      <div className="legalSection">
        <h2>6. Tus derechos</h2>
        <p>
          Puedes solicitar acceso, rectificación o eliminación de tus datos, y
          revocar en cualquier momento los permisos otorgados a nuestra
          aplicación desde la configuración de tu cuenta en TikTok. Escríbenos a{" "}
          <a href="mailto:contacto@matriz.cl">contacto@matriz.cl</a> y
          responderemos a la brevedad.
        </p>
      </div>

      <div className="legalSection">
        <h2>7. Cookies</h2>
        <p>
          Este sitio no utiliza cookies de seguimiento publicitario. Si en el
          futuro se incorporan herramientas de analítica, esta política se
          actualizará.
        </p>
      </div>

      <div className="legalSection">
        <h2>8. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política. La versión vigente será siempre la
          publicada en esta página, con su fecha de actualización.
        </p>
      </div>
    </section>
  );
}
