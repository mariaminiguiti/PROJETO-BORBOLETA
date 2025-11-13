// PageBackground.jsx - Componente de fundo da página
// Conceito shadcn: Background com layers, gradientes suaves e parallax effect

'use client';

import { useEffect, useState } from 'react';
import { effects } from './styles.jsx';

export default function PageBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: effects.gradient.background,
    color: '#333',
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  };

  const patternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(255, 204, 0, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(17, 0, 49, 0.05) 0%, transparent 50%)
    `,
    pointerEvents: 'none',
  };

  const floatingElementStyle = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255, 204, 0, 0.1) 0%, transparent 70%)',
    filter: 'blur(40px)',
    pointerEvents: 'none',
    transform: `translateY(${scrollY * 0.5}px)`,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <div style={pageStyle}>
      <div style={patternStyle} />
      <div style={{ ...floatingElementStyle, top: '100px', left: '10%' }} />
      <div style={{ ...floatingElementStyle, top: '400px', right: '5%' }} />
      <div style={{ ...floatingElementStyle, top: '800px', left: '15%' }} />
    </div>
  );
}
