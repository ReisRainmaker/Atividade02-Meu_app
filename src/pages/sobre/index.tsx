import { Link } from "react-router-dom"
import { ListItem, OrderedList,} from '@chakra-ui/react'

export default function Sobre(){
    return(
        <>
            <h1>Sobre</h1>
            <hr /> 
            <p>
                Esta é uma aplicação desenvolvida para treinamento e aprendizado. 
            </p>
            <hr /> 
            <p>
                Ela esta sendo desenvolvida em Javascript utilizando alguns frameworks:
            </p>
            <hr /> 
            <OrderedList>
                <ListItem>React</ListItem>
                <ListItem>Vite</ListItem>
                <ListItem>Chakra</ListItem>
                <ListItem>Nodes</ListItem>
            </OrderedList>
            <hr /> 
            <p>
                O responsável pelo desenvolvimento é o aluno Erik Reis, que está cursando Análise e Desenvolvimento de Sistemas na Fatec de Indaiatuba.
            </p>
            <hr /> 
            <Link to='/'> Home </Link>
        </>
    )
}