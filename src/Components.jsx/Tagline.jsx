// Tagline.jsx - Componente de slogan

'use client';

import { useEffect, useState } from 'react';
import { effects, animations } from './styles.jsx';

// Conceito shadcn: Badge/Banner com efeito de destaque

export default function Tagline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const taglineStyle = {
    textAlign: 'center',
    fontSize: '1.3rem',
    margin: '80px auto 60px',
    color: '#110031',
    fontWeight: '600',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: `${animations.transition.verySlow} 0.6s`,
    padding: '20px',
    background: effects.gradient.overlay,
    borderRadius: '16px',
    maxWidth: '800px',
    boxShadow: effects.shadow.medium,
    border: '1px solid rgba(255, 204, 0, 0.2)',
  };

  return (
    <h1 style={taglineStyle}>
      🦋 Onde a conexão acontece de graça
    </h1>
  );
}
