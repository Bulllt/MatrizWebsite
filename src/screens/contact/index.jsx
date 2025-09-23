import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "El nombre es requerido";
        } else if (value.length < 3) {
          newErrors.name = "El nombre debe tener al menos 3 caracteres";
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          newErrors.name = "El nombre no puede contener caracteres especiales";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Por favor ingresa un email válido";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (!value.trim()) {
          newErrors.phone = "El teléfono es requerido";
        } else if (!/^\d+$/.test(value)) {
          newErrors.phone = "El teléfono solo puede contener números";
        } else if (value.length < 8 || value.length > 9) {
          newErrors.phone = "El teléfono debe tener entre 8 y 9 dígitos";
        } else {
          delete newErrors.phone;
        }
        break;

      case "message":
        if (!value.trim()) {
          newErrors.message = "El mensaje es requerido";
        } else {
          delete newErrors.message;
        }
        break;

      default:
        break;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors(validateField(name, value));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrors(validateField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const fieldErrors = validateField(key, formData[key]);
      return { ...acc, ...fieldErrors };
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("¡Formulario enviado correctamente!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTouched({});
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <main className="contactContainer">
      <section className="contactHero">
        <h1 className="contactTitle">CONTACTO</h1>
        <p className="contactDescription">
          ¿Quieres colaborar, participar en nuestras actividades o proponer un
          proyecto? <br />
          Escríbenos, estamos abiertos a nuevas ideas y alianzas.
        </p>
      </section>

      <section className="contactFormSection">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name" className="formLabel">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`formInput ${errors.name ? "formInputError" : ""}`}
              placeholder="Ingresa tu nombre completo"
            />
            {errors.name && <span className="formError">{errors.name}</span>}
          </div>

          <div className="formGroup">
            <label htmlFor="email" className="formLabel">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`formInput ${errors.email ? "formInputError" : ""}`}
              placeholder="tu.email@ejemplo.com"
            />
            {errors.email && <span className="formError">{errors.email}</span>}
          </div>

          <div className="formGroup">
            <label htmlFor="phone" className="formLabel">
              Teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`formInput ${errors.phone ? "formInputError" : ""}`}
              placeholder="912345678"
            />
            {errors.phone && <span className="formError">{errors.phone}</span>}
          </div>

          <div className="formGroup">
            <label htmlFor="message" className="formLabel">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`formTextarea ${
                errors.message ? "formInputError" : ""
              }`}
              placeholder="..."
              rows="6"
            />
            {errors.message && (
              <span className="formError">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={`submitButton ${
              !isFormValid ? "submitButtonDisabled" : ""
            }`}
            disabled={!isFormValid}
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
