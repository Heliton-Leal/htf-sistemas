import { useState } from "react";
import logo from "../../assets/HTF_borda.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo da Empresa HTF" />
        </div>
        <form>
          <h1>Nova Conta</h1>
          <input
            type="text"
            placeholder="Seu Nome.."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
          <Link to="/">Já tem uma conta? Faça Login</Link>
        </form>
      </div>
    </div>
  );
}