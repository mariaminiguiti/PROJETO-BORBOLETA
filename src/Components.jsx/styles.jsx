// styles.jsx - Sistema de estilos centralizado

export const colors = {
  primary: {
    dark: '#110031',
    darker: '#0a001f',
    light: '#1a0040',
    medium: '#2d0066',
  },
  accent: {
    gold: '#ffcc00',
    goldLight: '#ffaa00',
  },
  background: {
    main: '#f4f6ec',
    light: '#f8f9fc',
    medium: '#e8eaf0',
    white: '#ffffff',
    whiteOff: '#fafafa',
  },
  text: {
    dark: '#333',
    medium: '#4a5568',
    light: '#666',
    lighter: '#e2e8f0',
  },
};

export const animations = {
  transition: {
    fast: '0.3s ease',
    medium: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    verySlow: '1s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const effects = {
  glassmorphism: (opacity = 0.1) => ({
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 204, 0, 0.2)',
  }),
  
  gradient: {
    primary: 'linear-gradient(135deg, #1a0040 0%, #110031 50%, #0a001f 100%)',
    card: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
    text: 'linear-gradient(135deg, #110031 0%, #ffcc00 50%, #110031 100%)',
    background: 'linear-gradient(180deg, #f8f9fc 0%, #e8eaf0 50%, #f4f6ec 100%)',
    overlay: 'linear-gradient(135deg, rgba(255, 204, 0, 0.05) 0%, rgba(17, 0, 49, 0.05) 100%)',
  },
  
  shadow: {
    small: '0 4px 12px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.05)',
    large: '0 20px 40px rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(255, 204, 0, 0.5)',
  },
  
  dropShadow: {
    gold: 'drop-shadow(0 0 10px rgba(255, 204, 0, 0.3))',
    goldBright: 'drop-shadow(0 0 20px rgba(255, 204, 0, 0.6))',
  },
};

export const spacing = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '40px',
  xxxl: '60px',
};
