import stiles from './InputFatec.module.css'

interface Props {
    placeholder: string
}

function ImputFatec({placeholder}: Props) {

    return(
        <>
        <input className={stiles.inputFatec} type='text' placeholder={placeholder}>
        
        </input>
        </>
    )

}

export default ImputFatec