import Link from 'next/link'
import Image from 'next/image'

export default function Perfil() {
  return (
    <>
      <header className="perfil-header">
        <nav>
          <Image src="/imgs/eventuslogobg.png" alt="Eventus Logo" width={250} height={250} />
          <section className="navdireita">
            <Link href="/" id="nav">Home</Link>
            <Link href="#footer" id="nav">Contatos</Link>
            <Image src="/imgs/perfilbg.png" alt="Perfil" width={40} height={40} />
          </section>
        </nav>
      </header>

      <section>
        <h1 className="perfil-h1">Configurações</h1>
        <Image id="foto" src="/imgs/perfil.png" alt="Foto do Perfil" width={200} height={200} />
      </section>

      <section className="button">
        <button type="submit">Conta</button>
        <button type="submit">Privacidade</button>
        <button type="submit">Notificações</button>
        <button type="submit" id="sair">Sair</button>
      </section>

      <footer id="footer">
        <Image src="/imgs/eventuslogobg.png" alt="Eventus Logo" width={200} height={100} />
        <section className="lugares">
          <h2>Acesse lugares:</h2>
          <a href="https://www.sescsp.org.br/">Eventos nos Sesc de todo SP</a> <br />
          <a href="https://casadasrosas.org.br/">Agora em: Casa das Rosas</a> <br />
          <a href="https://theatromunicipal.org.br/">Programação do Teatro Municipal</a> <br />
        </section>

        <section id="redes">
          <h2>Nos siga para mais!</h2>
          <p><Image src="/imgs/facebookbg.png" alt="Facebook" width={22} height={22} />  Eventus SP</p>
          <p><Image src="/imgs/xbg.png" alt="X" width={22} height={22} />  @eventussp</p>
          <p><Image src="/imgs/instabg.png" alt="Instagram" width={22} height={22} />  @eventussp</p>
          <p><Image src="/imgs/tiktokbg.png" alt="TikTok" width={22} height={22} />  @SPEventuss</p>
        </section>

        <section className="help">
          <h2>Dúvidas?</h2>
          <p>Entre em contato conosco:</p>
          <p>Cel: (11) 99999-9999</p>
          <p>Tel: (11) 0800 999 99</p>
        </section>
      </footer>
    </>
  )
}