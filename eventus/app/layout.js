import './globals.css'

export const metadata = {
  title: 'Eventus - Agenda Cultural',
  description: 'Plataforma de eventos culturais em São Paulo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}