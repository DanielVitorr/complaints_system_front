import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const credentials = btoa(`${cpf}:${password}`); // codifica CPF e senha em base64

    try {
      const response = await api.get("/users/me", {
        headers: {
          Authorization: `Basic ${credentials}`
        }
      });
      console.log(response.data)

      sessionStorage.setItem("authHeader", `Basic ${credentials}`);
      sessionStorage.setItem("user", JSON.stringify(response.data));

      navigate("/home");
    } catch (err) {
      alert("CPF ou senha inválidos");
    }
  }

  return (
    <div className="container">
      <form action="">
        <h1>Login</h1>
        <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
        <input placeholder="Senha" type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Entrar</button>

        <p>
          Não tem cadastro?
          <Link to="/register">Clique aqui!!</Link>
        </p>
      </form>
    </div>
  );
}
