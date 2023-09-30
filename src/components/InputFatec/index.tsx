import styles from './InputFatec.module.css'

interface Props {
    placeholder: string
}

export default function ImputFatec({placeholder}: Props) {

    return(
        <>
        <input className={styles.inputFatec} type='text' placeholder={placeholder}>
        
        </input>
        </>
    )

}

