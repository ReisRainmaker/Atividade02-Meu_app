import './contato.css'
import { Link } from "react-router-dom"
import ButtonFatec from '../../components/ButtonFatec'
import ImputFatec from '../../components/InputFatec'

export default function Contato(){
    return(
        <>
            <p className='texto'> Entre em contato </p>
            <hr />
            <div className='container'>
            <ImputFatec placeholder='Nome' />
            <ImputFatec placeholder='E-mail' />
            <ImputFatec placeholder='Telefone' />
            </div>
            <hr />
            <ButtonFatec type='button' label='Fatec: Envie sua mensagem' />
            <hr />
            <Link to='/'> Home </Link>
        </>
    )
} 