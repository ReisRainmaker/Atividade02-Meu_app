import Layout from "../../Layout"
import BoxInserirTarefas from "../../components/BoxInserirTarefa"
import BoxTarefas from "../../components/BoxTarefas"
import './pageTarefas.css'
import { Heading } from "@chakra-ui/react"

export default function Tarefas(){
    return(
        <Layout>
            <div className="divTarefas">
                <Heading as='h2' size='3xl' noOfLines={1} marginLeft='10px'>
                    Lista de tarefas
                </Heading>
                <hr />
                <BoxInserirTarefas></BoxInserirTarefas>
                <hr />
                <BoxTarefas>{'Tarefa 1'}</BoxTarefas>
                <BoxTarefas>{'Tarefa 2'}</BoxTarefas>
                <BoxTarefas>{'Tarefa 3'}</BoxTarefas>
            </div>
        </Layout>
    )
} 