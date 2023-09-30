import './pageContato.css'
import ButtonFatec from '../../components/ButtonFatec'
import ImputFatec from '../../components/InputFatec'
import Layout from '../../Layout'
import { Heading } from '@chakra-ui/react'

export default function Contato(){
    return(
        <Layout>
            <div className='boxPageContato'>
                <Heading as='h2' size='3xl' noOfLines={1}> Entre em contato </Heading>
                <hr />
                <div className='containerImputs'>
                <ImputFatec placeholder='Nome' />
                <ImputFatec placeholder='E-mail' />
                <ImputFatec placeholder='Telefone' />
                </div>
                <hr />
                <ButtonFatec type='button' label='Fatec: Envie sua mensagem' />
            </div>           
        </Layout>
    )
} 