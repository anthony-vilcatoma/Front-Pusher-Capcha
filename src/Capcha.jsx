import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function MyForm() {
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      country_id: '1', 
      document_type_id: '1', 
      document_number: '78436224', 
      password: 'devdatep', 
      recaptcha: recaptchaToken 
    };
  
    fetch("http://127.0.0.1:8000/login", { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
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
      <ReCAPTCHA
        sitekey="6LfcAZcpAAAAAPvWZJlmW0GDEePjm8lT8pRbHiLc"
        onChange={(token) => setRecaptchaToken(token)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
