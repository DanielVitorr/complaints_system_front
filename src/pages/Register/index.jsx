import './style.css'
import api from '../../services/api'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

  const inputCpf = useRef()
  const inputName = useRef()
  const inputPassword = useRef()

  async function createUsers() {
    await api.post("/users", {
      cpf: inputCpf.current.value,
      username: inputName.current.value,
      password: inputPassword.current.value
    })
  }

  return (
    <div className="container">
      <form className='formContainer'>
        <h1>Cadastro de usuário</h1>
        <input name='cpf' type='number' placeholder='Digite seu CPF' ref={inputCpf} />
        <input name='nome' type='text' placeholder='Informe seu Nome' ref={inputName} />
        <input name='senha' type='number' placeholder='Insira uma senha' ref={inputPassword} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
        <p>
          Ja tem cadastro??
          <Link to="/">Clique aqui!!</Link>
        </p>
      </form>
    </div>
  )
}