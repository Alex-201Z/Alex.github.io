import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <p style={{ textAlign: 'center' }}>N'hésitez pas à me contacter par e-mail ou via mes réseaux professionnels.</p>
      <div className="contact-links">
        <a href="mailto:alex.ondo.pro@example.com">alex.ondo.pro@example.com</a>
        <a href="https://github.com/Alex-201Z" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alex-ondo-a5285920b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
