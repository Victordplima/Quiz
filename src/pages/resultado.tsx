import Botao from "../../components/Botao";
import Estatistica from "../../components/Estatistica";
import styles from "../styles/Resultado.module.css";
import { useRouter } from "next/router";

export default function resultado() {
    const router = useRouter();

    const total = router.query.total ? +router.query.total : 0;
    const certas = router.query.certas ? +router.query.certas : 0;
    const percentual = Math.round((certas / total) * 100);

    return (
        <div className={styles.resultado}>
            <h1>Resultados Finais</h1>
            <div style={{ display: "flex" }}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Certas" valor={certas} />
                <Estatistica texto="Percentual" valor={`${percentual}%`} />
            </div>
            <Botao href="/" texto="Tentar novamente"/>
        </div>
    );
}
