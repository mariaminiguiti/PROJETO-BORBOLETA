import Link from 'next/link'
import Image from 'next/image'

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="login-body">
      <section className="login-container">
        <section className="login-left-box">
          <Image src="/imgs/eventuslogobg.png" alt="Eventus Logo" width={400} height={400} />
        </section>

        <section className="login-right-box">
          <h2>Bem Vindo(a)</h2>
          <p>Faça Login na sua conta para continuar</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />

            <section className="forgot-password">
              <a href="#">Esqueceu a senha?</a>
              <span>→</span>
            </section>

            <section className="social-login">
              <p>ou</p>
              <Link href="/cadastro">Cadastra-se!</Link>
            </section>
          </form>
        </section>
      </section>
    </div>
  )
}