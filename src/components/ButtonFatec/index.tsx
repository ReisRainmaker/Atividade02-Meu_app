import { Button } from '@chakra-ui/react'
interface Props {
    type: 'button' | 'submit' |'reset' | undefined
    label: string
}

export default function ButtonFatec({type, label}: Props) {

    return(
        <>
        <Button colorScheme='red' size="lg" type={type}>
          {label}
        </Button>
       
        </>
    )

}

