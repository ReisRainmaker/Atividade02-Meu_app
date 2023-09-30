import { Box, Button, Text } from "@chakra-ui/react";
import './BoxTarefas.css';
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export default function BoxTarefas(props: Props){

    const {children} = props

        return (
        <Box className="boxTarefas">
            <Text className="text"> {children} </Text>
            <div>
                <Button colorScheme="red" className="button"> Pendente </Button>
                <Button colorScheme="red" className="button"> Excluir </Button>
            </div>    
        </Box>
        )
}