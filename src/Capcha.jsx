import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function MyForm() {
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Asumiendo que tienes variables para cada uno de los valores a enviar
    const formData = {
      country_id: '1', // Deberías reemplazar esto con el valor correspondiente
      document_type_id: '1', // Deberías reemplazar esto con el valor correspondiente
      document_number: '78436224', // Deberías reemplazar esto con el valor correspondiente
      password: 'devdatep', // Deberías reemplazar esto con el valor correspondiente
      recaptcha: recaptchaToken // Asumiendo que recaptchaToken es una variable que contiene tu token
    };
  
    fetch("http://127.0.0.1:8000/login", { // Asegúrate de reemplazar '/login' con tu endpoint específico
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData) // Convertimos el objeto de los datos del formulario a JSON
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    console.log(recaptchaToken)
  };    
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Tus campos de formulario aquí */}
      <ReCAPTCHA
        sitekey="6LfcAZcpAAAAAPvWZJlmW0GDEePjm8lT8pRbHiLc"
        onChange={(token) => setRecaptchaToken(token)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
