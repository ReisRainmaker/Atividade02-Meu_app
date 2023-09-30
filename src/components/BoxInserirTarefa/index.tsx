import { Button, Checkbox, Heading, Input } from "@chakra-ui/react"
import './BoxInserirTarefas.css'

export default function BoxInserirTarefas (){


    return(
    <div className="boxInserirTarefas">
        <Heading as='h2' size='lg'>Inserir nova tarefa</Heading>
            <div className="linhaInsercao">
                <Input placeholder="Digite o titulo da Task"></Input>
                <Checkbox className="conteudo"> Realizada? </Checkbox>
                <Button colorScheme="blue" className="conteudo"> Inserir </Button>
            </div>
    </div>
    )
}