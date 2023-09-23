import stiles from './InputFatec.module.css'

interface Props {
    placeholder: string
}

export default function ImputFatec({placeholder}: Props) {

    return(
        <>
        <input className={stiles.inputFatec} type='text' placeholder={placeholder}>
        
        </input>
        </>
    )

}

