// EventsGrid.jsx - Componente da grade de eventos

'use client';

import { useEffect, useState } from 'react';
import EventCard from './EventCard.jsx';
import { animations } from './styles.jsx';

// Conceito shadcn: Grid responsivo com stagger animations

export default function EventsGrid({ events }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

  const mainStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
    gap: isMobile ? '30px' : '40px',
    padding: isMobile ? '20px' : '40px',
    maxWidth: '1400px',
    margin: '0 auto',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `${animations.transition.verySlow} 0.4s`,
  };

  return (
    <main style={mainStyle}>
      {events.map((event, index) => (
        <div
          key={event.id}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.2}s`,
          }}
        >
          <EventCard
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            location={event.location}
            date={event.date}
          />
        </div>
      ))}
    </main>
  );
}
