'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Conceito shadcn: Navigation bar com glassmorphism, hover states e micro-interactions
export default function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: 'linear-gradient(135deg, #1a0040 0%, #110031 50%, #0a001f 100%)',
    width: '100%',
    height: '90px',
    color: '#f4f6ec',
    boxShadow: '0 8px 32px rgba(17, 0, 49, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderBottom: '1px solid rgba(255, 204, 0, 0.1)',
  };

  const logoStyle = {
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 12px rgba(255, 204, 0, 0.4))',
  };

  const locationStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 18px',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 204, 0, 0.25)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const navStyle = (isHovered) => ({
    color: isHovered ? '#ffcc00' : '#f4f6ec',
    textDecoration: 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '10px 20px',
    borderRadius: '12px',
    background: isHovered 
      ? 'linear-gradient(135deg, rgba(255, 204, 0, 0.15), rgba(255, 204, 0, 0.08))' 
      : 'transparent',
    border: `1px solid ${isHovered ? 'rgba(255, 204, 0, 0.4)' : 'transparent'}`,
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    fontWeight: isHovered ? '600' : '500',
    boxShadow: isHovered ? '0 6px 16px rgba(255, 204, 0, 0.2)' : 'none',
  });

  return (
    <header style={headerStyle}>
      <div 
        style={logoStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) rotate(-3deg)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 24px rgba(255, 204, 0, 0.7))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255, 204, 0, 0.4))';
        }}
      >
        <Image 
          src="/eventuslogobg.png" 
          alt="Eventus Logo" 
          width={250} 
          height={250}
          priority
        />
      </div>
      
      <div 
        style={locationStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 204, 0, 0.1))';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.5)';
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 204, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.25)';
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        <Image 
          src="/localizacaobg.png" 
          alt="Localização" 
          width={40} 
          height={40}
        />
        <span style={{ fontWeight: '600', letterSpacing: '0.3px' }}>São Paulo</span>
      </div>

      <Link 
        href="#footer" 
        style={navStyle(hoveredLink === 'contatos')}
        onMouseEnter={() => setHoveredLink('contatos')}
        onMouseLeave={() => setHoveredLink(null)}
      >
        Contatos
      </Link>

      <Link 
        href="/login" 
        style={navStyle(hoveredLink === 'login')}
        onMouseEnter={() => setHoveredLink('login')}
        onMouseLeave={() => setHoveredLink(null)}
      >
        Login
      </Link>

      <Link 
        href="/perfil"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15) rotate(8deg)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 16px rgba(255, 204, 0, 0.7))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.filter = 'none';
        }}
        style={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'inline-block',
        }}
      >
        <Image 
          src="/perfilbg.png" 
          alt="Perfil" 
          width={40} 
          height={40}
        />
      </Link>
    </header>
  );
}
