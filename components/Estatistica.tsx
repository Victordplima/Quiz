import styles from "../src/styles/Estatistica.module.css";

interface EstatisticaProps {
    valor: string | number;
    texto: string;
    corFundo?: string;
    corFonte?: string;
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className={styles.estatistica}>
            <div
                className={styles.valor}
                style={{
                    backgroundColor: props.corFundo ?? "#6848fe",
                    color: props.corFonte ?? "#37e9bb",
                }}
            >
                {props.valor}
            </div>
            <div className={styles.texto}>{props.texto}</div>
        </div>
    );
}
