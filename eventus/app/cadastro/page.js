import { useState } from 'react'
import Image from 'next/image'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const emailValue = formData.email.trim();
    const senhaValue = formData.senha;
    const confirmarSenhaValue = formData.confirmarSenha;
    const dataNascimentoValue = formData.dataNascimento;

    // Validação do email
    if (!emailValue.includes('@')) {
      alert('O e-mail deve conter o caractere "@"');
      return;
    }
    
    const partesEmail = emailValue.split('@');
    if (partesEmail.length !== 2 || !partesEmail[1].includes('.')) {
      alert('O e-mail deve conter um ponto (".") após o símbolo "@"');
      return;
    }

    // Validação de senha forte
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!senhaForteRegex.test(senhaValue)) {
      alert('A senha deve conter no mínimo 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
      return;
    }

    // Confirmação de senha
    if (senhaValue !== confirmarSenhaValue) {
      alert('As senhas não coincidem.');
      return;
    }

    // Validação da data de nascimento
    if (!dataNascimentoValue) {
      alert('Por favor, insira sua data de nascimento.');
      return;
    }

    const dataNascimento = new Date(dataNascimentoValue);
    const hoje = new Date();

    if (dataNascimento > hoje) {
      alert('A data de nascimento não pode ser no futuro.');
      return;
    }

    // Verificar idade mínima 18 anos
    const idadeMinima = 18;
    const dataLimite = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
    if (dataNascimento > dataLimite) {
      alert(`Você deve ter pelo menos ${idadeMinima} anos para se cadastrar.`);
      return;
    }

    // Se passou por todas as validações
    console.log('Cadastro válido:', formData);
  }

  return (
    <div className="cadastro-body">
      <section className="cadastro-container">
        <section className="cadastro-left-box">
          <Image src="/imgs/eventuslogobg.png" alt="Eventus Logo" width={400} height={400} />
        </section>

        <section className="cadastro-right-box">
          <h2>CADASTRE-SE</h2>

          <form className="cadastro-form" onSubmit={handleSubmit}>
            <section className="input-group">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                name="nome"
                placeholder="Nome completo" 
                value={formData.nome}
                onChange={handleChange}
                required 
              />
            </section>

            <section className="input-group">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </section>

            <section className="input-group">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                name="senha"
                placeholder="Senha" 
                value={formData.senha}
                onChange={handleChange}
                required 
              />
            </section>

            <section className="input-group">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                name="confirmarSenha"
                placeholder="Confirmar senha" 
                value={formData.confirmarSenha}
                onChange={handleChange}
                required 
              />
            </section>

            <label className="birth-label">Data de nascimento:</label>
            <section className="birth-select">
              <input 
                type="date" 
                name="dataNascimento"
                style={{ width: '300px', height: '30px' }} 
                value={formData.dataNascimento}
                onChange={handleChange}
                required 
              />
            </section>

            <section className="submit-arrow">
              <button type="submit">
                <span>→</span>
              </button>
            </section>
          </form>
        </section>
      </section>
    </div>
  )
}