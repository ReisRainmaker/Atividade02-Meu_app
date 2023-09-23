import styles from './ButtonFatec.module.css'

interface Props {
    type: 'button' | 'submit' |'reset' | undefined
    label: string
}

export default function ButtonFatec({type, label}: Props) {

    return(
        <>
        <button className={styles.botaoFatec} type={type}>
            {label}
        </button>
        </>
    )

}

