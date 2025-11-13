'use client';

import { useState } from 'react';

// Conceito shadcn: Card component com hover states, elevation e smooth transitions
export default function EventCard({ title, description, imageUrl, location, date }) {
  const [isHovered, setIsHovered] = useState(false);

  // Card base com glassmorphism sutil
  const cardStyle = {
    background: isHovered 
      ? 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: isHovered 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(255, 204, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)'
      : '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
    border: isHovered 
      ? '1px solid rgba(255, 204, 0, 0.4)' 
      : '1px solid rgba(0, 0, 0, 0.05)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
  };

  // Overlay com gradiente dinâmico
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 204, 0, 0.08) 0%, rgba(17, 0, 49, 0.06) 100%)',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.5s ease',
    pointerEvents: 'none',
    zIndex: 1,
  };

  // Shine effect (brilho ao passar o mouse)
  const shineStyle = {
    position: 'absolute',
    top: 0,
    left: isHovered ? '100%' : '-100%',
    width: '50%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    transition: 'left 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
    zIndex: 2,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const titleStyle = {
    fontSize: '22px',
    marginBottom: '12px',
    fontWeight: '700',
    textAlign: 'center',
    background: isHovered
      ? 'linear-gradient(135deg, #110031 0%, #ffcc00 50%, #110031 100%)'
      : 'linear-gradient(135deg, #110031 0%, #2d0066 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'all 0.4s ease',
    letterSpacing: '0.3px',
  };

  const paragraphStyle = {
    fontSize: '14px',
    lineHeight: '1.7',
    color: isHovered ? '#374151' : '#4a5568',
    transition: 'color 0.3s ease',
  };

  const imageContainerStyle = {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '16px',
    margin: '16px 0',
    position: 'relative',
    boxShadow: isHovered
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.4s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
    filter: isHovered ? 'brightness(1.05) contrast(1.05)' : 'brightness(1) contrast(1)',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 14px',
    background: isHovered 
      ? 'linear-gradient(135deg, #ffcc00 0%, #ffaa00 100%)'
      : 'rgba(255, 204, 0, 0.12)',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    color: isHovered ? '#110031' : '#666',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    marginTop: '12px',
    border: isHovered 
      ? '1px solid rgba(255, 204, 0, 0.4)' 
      : '1px solid rgba(255, 204, 0, 0.2)',
    boxShadow: isHovered 
      ? '0 4px 12px rgba(255, 204, 0, 0.25)' 
      : '0 2px 4px rgba(0, 0, 0, 0.05)',
  };

  return (
    <section 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={overlayStyle} />
      <div style={shineStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={paragraphStyle}>{description}</p>
        <div style={imageContainerStyle}>
          <img 
            src={imageUrl} 
            alt={title}
            style={imageStyle}
          />
        </div>
        <div style={badgeStyle}>
          📍 <strong>Local: </strong>{location}
        </div>
        <div style={badgeStyle}>
          🗓️ <strong>Data:</strong> {date}
        </div>
      </div>
    </section>
  );
}
