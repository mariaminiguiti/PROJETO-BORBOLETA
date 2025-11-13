'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Conceito shadcn: Footer com sections, hover effects e glassmorphism
export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const footerStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #1a0040 0%, #110031 50%, #0a001f 100%)',
    padding: '60px 25px 40px',
    display: 'flex',
    justifyContent: 'space-evenly',
    color: '#f4f6ec',
    gap: '40px',
    flexWrap: 'wrap',
    position: 'relative',
    boxShadow: '0 -10px 40px rgba(17, 0, 49, 0.6), inset 0 1px 0 0 rgba(255, 204, 0, 0.1)',
  };

  const decorativeLineStyle = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #ffcc00 20%, #ffcc00 80%, transparent)',
    boxShadow: '0 0 30px rgba(255, 204, 0, 0.6), 0 0 60px rgba(255, 204, 0, 0.3)',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const h2Style = {
    fontSize: '22px',
    marginBottom: '24px',
    color: '#ffcc00',
    textAlign: 'center',
    fontWeight: '700',
    textShadow: '0 0 15px rgba(255, 204, 0, 0.5)',
    letterSpacing: '0.8px',
  };

  const paragraphStyle = {
    fontSize: '14px',
    color: '#e2e8f0',
    lineHeight: '2',
    transition: 'color 0.3s ease',
  };

  const linkStyle = (isHovered) => ({
    fontSize: '14px',
    color: isHovered ? '#ffcc00' : '#e2e8f0',
    textDecoration: 'none',
    display: 'block',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '10px 16px',
    borderRadius: '10px',
    background: isHovered 
      ? 'linear-gradient(135deg, rgba(255, 204, 0, 0.15), rgba(255, 204, 0, 0.08))' 
      : 'transparent',
    border: `1px solid ${isHovered ? 'rgba(255, 204, 0, 0.4)' : 'transparent'}`,
    transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
    marginBottom: '10px',
    boxShadow: isHovered ? '0 4px 12px rgba(255, 204, 0, 0.2)' : 'none',
  });

  const sectionStyle = {
    padding: '24px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 204, 0, 0.15)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  };

  const lugaresStyle = {
    ...sectionStyle,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const socialItemStyle = (isHovered) => ({
    ...paragraphStyle,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '12px',
    background: isHovered 
      ? 'linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 204, 0, 0.1))' 
      : 'rgba(255, 255, 255, 0.06)',
    marginBottom: '10px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: `1px solid ${isHovered ? 'rgba(255, 204, 0, 0.4)' : 'transparent'}`,
    transform: isHovered ? 'scale(1.08) translateX(5px)' : 'scale(1)',
    boxShadow: isHovered ? '0 6px 16px rgba(255, 204, 0, 0.25)' : 'none',
  });

  const helpStyle = {
    ...sectionStyle,
    textAlign: 'center',
  };

  return (
    <footer id="footer" style={footerStyle}>
      <div style={decorativeLineStyle} />
      
      <div 
        style={logoContainerStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15) rotate(-5deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
      >
        <Image 
          src="/eventuslogobg.png" 
          alt="Eventus Logo" 
          width={200} 
          height={200}
          style={{ filter: 'drop-shadow(0 0 25px rgba(255, 204, 0, 0.5))' }}
        />
      </div>

      <section 
        style={lugaresStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 204, 0, 0.1)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.4)';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 204, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        }}
      >
        <h2 style={h2Style}>🎭 Acesse lugares</h2>
        <Link 
          href="https://www.sescsp.org.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle(hoveredLink === 'sesc')}
          onMouseEnter={() => setHoveredLink('sesc')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          ✨ Eventos nos Sesc de todo SP
        </Link>
        <Link 
          href="https://casadasrosas.org.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle(hoveredLink === 'casa')}
          onMouseEnter={() => setHoveredLink('casa')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          🌹 Agora em: Casa das Rosas
        </Link>
        <Link 
          href="https://theatromunicipal.org.br/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={linkStyle(hoveredLink === 'teatro')}
          onMouseEnter={() => setHoveredLink('teatro')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          🎪 Programação do Teatro Municipal
        </Link>
      </section>

      <section 
        style={sectionStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 204, 0, 0.1)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.4)';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 204, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        }}
      >
        <h2 style={h2Style}>🚀 Nos siga para mais!</h2>
        <div 
          style={socialItemStyle(hoveredSocial === 'facebook')}
          onMouseEnter={() => setHoveredSocial('facebook')}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <Image src="/facebookbg.png" alt="Facebook" width={25} height={25} />
          <span style={{ fontWeight: '600' }}>Eventus SP</span>
        </div>
        <div 
          style={socialItemStyle(hoveredSocial === 'twitter')}
          onMouseEnter={() => setHoveredSocial('twitter')}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <Image src="/xbg.png" alt="X/Twitter" width={25} height={25} />
          <span style={{ fontWeight: '600' }}>@eventussp</span>
        </div>
        <div 
          style={socialItemStyle(hoveredSocial === 'instagram')}
          onMouseEnter={() => setHoveredSocial('instagram')}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <Image src="/instabg.png" alt="Instagram" width={25} height={25} />
          <span style={{ fontWeight: '600' }}>@eventussp</span>
        </div>
        <div 
          style={socialItemStyle(hoveredSocial === 'tiktok')}
          onMouseEnter={() => setHoveredSocial('tiktok')}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <Image src="/tiktokbg.png" alt="TikTok" width={25} height={25} />
          <span style={{ fontWeight: '600' }}>@SPEventuss</span>
        </div>
      </section>

      <section 
        style={helpStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 204, 0, 0.1)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.4)';
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 204, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.border = '1px solid rgba(255, 204, 0, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        }}
      >
        <h2 style={h2Style}>💬 Dúvidas?</h2>
        <p style={paragraphStyle}>Entre em contato conosco:</p>
        <p style={{ ...paragraphStyle, fontWeight: '700', marginTop: '16px', fontSize: '15px' }}>
          📱 Cel: (11) 99999-9999
        </p>
        <p style={{ ...paragraphStyle, fontWeight: '700', fontSize: '15px', marginTop: '8px' }}>
          ☎️ Tel: (11) 0800 999 99
        </p>
      </section>
    </footer>
  );
}
