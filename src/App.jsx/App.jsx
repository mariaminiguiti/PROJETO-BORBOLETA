'use client';

import { 
  Header, 
  Footer, 
  PageBackground, 
  PageTitle, 
  EventsGrid, 
  Tagline 
} from '@/Components.jsx';

// Dados dos eventos
const events = [
  {
    id: 1,
    title: "Oktoberfesta de Moema",
    description: "Realizada no coração de Moema, este festival de rua foi organizado especialmente para celebrar a cultura germânica com apresentações de banda, dança, comidas típicas, chope e um ambiente familiar e agradável para todos.",
    imageUrl: "https://images.sympla.com.br/68b7670e3b692.jpg",
    location: "Praça Ns. Aparecida de Moema, São Paulo - SP",
    date: "04 out - 2025 • 10:30 às 22:30"
  },
  {
    id: 2,
    title: "RockFUN Fest",
    description: "Prepare-se para uma experiência inesquecível de rock and roll no RockFunFest. O festival será realizado em breve no Centro Esportivo Tietê (São Paulo - SP), e traz um lineup repleto de super estrelas para agitar o dia inteiro com muita música, energia e diversão.",
    imageUrl: "https://images.sympla.com.br/674c5f3b26108.png",
    location: "Centro Esportivo Tietê, São Paulo - SP",
    date: "14 dez - 2025 • 11:00 às 21:00"
  },
  {
    id: 3,
    title: "Red Bull Bc One",
    description: "O campeonato mundial de breaking Red Bull BC One é a maior e mais prestigiada competição de breaking 1x1 do mundo. Todos os anos, milhares de breakers competem por uma chance de representar seus países da Final Mundial do Red Bull BC One.",
    imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1077902803%2F2144735415403%2F1%2Foriginal.20250721-150058?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=90%2C0%2C2340%2C1170&s=4afae98eb7fc4eb8b789a100a3852207",
    location: "Parque da Juventude - SP",
    date: "5 out - 2025 • 13:00 às 20:30"
  },
  {
    id: 4,
    title: "Samba do Povo",
    description: "Pela primeira vez a quadra do Seci receberá o grupo mais renomado do ABC Paulista, o Samba do Povo! Junto com eles, SeciAmarra pra deixar a festa mais animada.",
    imageUrl: "https://images.sympla.com.br/68b4607369418.png",
    location: "G.R.C. Escola de Samba Seci, Santo André",
    date: "20 set - 2025 • 18:00 às 00:30"
  }
];

export default function App() {
  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 1,
  };

  return (
    <>
      <PageBackground />
      <div style={contentWrapperStyle}>
        <Header />
        <PageTitle />
        <EventsGrid events={events} />
        <Tagline />
        <Footer />
      </div>
    </>
  );
}
