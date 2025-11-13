// PageTitle.jsx - Componente de título da página

'use client';

import { useEffect, useState } from 'react';
import { effects, animations } from './styles.jsx';

// Conceito shadcn: Typography com gradientes e animações suaves

export default function PageTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

  const titleStyle = {
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    textAlign: 'center',
    marginTop: isMobile ? '40px' : '80px',
    marginBottom: '20px',
    fontWeight: '800',
    background: effects.gradient.text,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
    transition: animations.transition.verySlow,
    textShadow: '0 2px 10px rgba(255, 204, 0, 0.2)',
    position: 'relative',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '40px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: `${animations.transition.verySlow} 0.2s`,
    fontWeight: '400',
  };

  return (
    <>
      <h3 style={titleStyle}>
        Confira os Próximos Eventos
      </h3>
      <p style={subtitleStyle}>
        ✨ Descubra experiências culturais incríveis em São Paulo
      </p>
    </>
  );
}
