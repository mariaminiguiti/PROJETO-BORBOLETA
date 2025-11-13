export const metadata = {
  title: "Eventus - Agenda Cultural",
  description: "Onde a conexão acontece de graça. Descubra os melhores eventos culturais de São Paulo.",
};

export default function RootLayout({ children }) {
  const globalStyle = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, Helvetica, sans-serif',
    background: '#f4f6ec',
    color: '#333',
    lineHeight: 1.6,
  };

  return (
    <html lang="pt-br">
      <body style={globalStyle}>
        {children}
      </body>
    </html>
  );
}
