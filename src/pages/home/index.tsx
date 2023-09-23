import { Link } from "react-router-dom"


export default function Home() {

  return (
    <>
      <h1>Bem vindo a minha aplicação!</h1>
      <hr />      
      <Link to='/sobre'> Sobre </Link>
      <hr />      
      <Link to='/tarefas'> Tarefas </Link>
      <hr />      
      <Link to='/contato'> Contato </Link>
    </>
  )
}


