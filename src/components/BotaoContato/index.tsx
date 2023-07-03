import styles from './styles.module.scss'

export function BotaoContato() {
    return (
        <a 
            href='https://wa.me/24992281699' 
            target='_blank' 
            className={styles.botao_contato}
        >
            CONTATE-ME AGORA
        </a>
    )
}