import React, { useState, useEffect, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Hero = () => {
  const [init, setInit] = useState(false);
  const [typedText, setTypedText] = useState('');
  const textsToType = ["Alex Ondo", "Développeur Laravel", "Spécialiste JavaScript"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded", container);
  };

  const particleOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#00ffff',
      },
      links: {
        color: '#00ffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

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

  if (init) {
    return (
      <section id="accueil">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
        <div className="hero-text" style={{ zIndex: 1, position: 'relative' }}>
          <h1 id="typing-title">{typedText}</h1>
          <p>Étudiant en développement d'applications, passionné par les nouvelles technologies.</p>
        </div>
      </section>
    );
  }

  return <></>;
};

export default Hero;
