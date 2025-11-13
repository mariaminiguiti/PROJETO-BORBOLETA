'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

// Conceito shadcn: Navigation bar com glassmorphism, hover states e micro-interactions
export default function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setShowDropdown(false);
  };

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

      {!isAuthenticated ? (
        <Link 
          href="/login" 
          style={navStyle(hoveredLink === 'login')}
          onMouseEnter={() => setHoveredLink('login')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Login
        </Link>
      ) : (
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 16px',
              borderRadius: '12px',
              background: hoveredLink === 'user' 
                ? 'linear-gradient(135deg, rgba(255, 204, 0, 0.15), rgba(255, 204, 0, 0.08))' 
                : 'rgba(255, 255, 255, 0.08)',
              border: `1px solid ${hoveredLink === 'user' ? 'rgba(255, 204, 0, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              color: '#f4f6ec',
              fontWeight: '500',
            }}
            onMouseEnter={() => setHoveredLink('user')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {user?.photoURL ? (
              <img 
                src={user.photoURL} 
                alt={user.displayName || 'User'} 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 204, 0, 0.4)',
                }}
              />
            ) : (
              <Image 
                src="/perfilbg.png" 
                alt="Perfil" 
                width={32} 
                height={32}
                style={{ borderRadius: '50%' }}
              />
            )}
            <span style={{ fontSize: '14px', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {user?.displayName || 'Usuário'}
            </span>
            <span style={{ fontSize: '12px', transition: 'transform 0.3s ease', transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ▼
            </span>
          </button>

          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                minWidth: '180px',
                background: 'linear-gradient(135deg, #1a0040 0%, #110031 100%)',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 204, 0, 0.2)',
                padding: '8px',
                zIndex: 2000,
                backdropFilter: 'blur(16px)',
              }}
            >
              <button
                onClick={handleSignOut}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: hoveredLink === 'signout' 
                    ? 'linear-gradient(135deg, rgba(255, 204, 0, 0.2), rgba(255, 204, 0, 0.1))' 
                    : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#f4f6ec',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
                onMouseEnter={() => setHoveredLink('signout')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                🚪 Sair
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
