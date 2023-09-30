import { ListItem, OrderedList,} from '@chakra-ui/react'
import Layout from '../../Layout'
import { Heading , Text} from '@chakra-ui/react'


export default function Sobre(){
    return(
        <Layout>
            <div>
                <Heading as='h1' size='4xl' noOfLines={1}>
                    Sobre
                </Heading>
                <hr /> 
                <Heading as='h2' size='2xl'>
                    Esta é uma aplicação desenvolvida para treinamento e aprendizado.
                </Heading>
                <hr /> 
                <Text fontSize='xl'>
                Ela esta sendo desenvolvida em Javascript utilizando alguns frameworks:
                </Text>
                <hr /> 
                <OrderedList size='xl'>
                    <ListItem>React</ListItem>
                    <ListItem>Vite</ListItem>
                    <ListItem>Chakra</ListItem>
                    <ListItem>Nodes</ListItem>
                </OrderedList>
                <hr /> 
                <Text fontSize='xl'>
                    O responsável pelo desenvolvimento é o aluno Erik Reis, que está cursando Análise e Desenvolvimento de Sistemas na Fatec de Indaiatuba.
                </Text>
            </div>
        </Layout>
    )
}