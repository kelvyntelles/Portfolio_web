import styles from './styles.module.scss'

interface EducacaoProps {
    imgUrl: string;
    instituicao: string;
    curso: string;
}

export function Educacao({ imgUrl, instituicao, curso }: EducacaoProps) {
    return (
        <div className={styles.container_educacao}>
            <div>
                <img src={imgUrl} alt="" />
            </div>
            <span><strong>Instituição:</strong> {instituicao}</span>
            <span><strong>Curso:</strong> {curso}</span>
        </div>
    )
}