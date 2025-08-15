import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const textsToType = ["Alex Ondo", "Développeur Laravel", "Spécialiste JavaScript"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentText = textsToType[textIndex];

      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textsToType.length);
      }
    };

    const typingTimeout = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, textsToType]);

  return (
    <section id="accueil">
      <div className="hero-text">
        <h1 id="typing-title">{typedText}</h1>
        <p>Étudiant en développement d'applications, passionné par les nouvelles technologies.</p>
      </div>
    </section>
  );
};

export default Hero;
