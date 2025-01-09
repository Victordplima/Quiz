import styles from "../src/styles/Questao.module.css"
import QuestaoModel from "../model/questao";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = [
    {valor: "A", cor: "#351e70"},
    {valor: "B", cor: "#351e70"},
    {valor: "C", cor: "#351e70"},
    {valor: "D", cor: "#351e70"}
]

interface QuestaoProps {
    valor: QuestaoModel;
    respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor;

    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
            return <Resposta
                key={i}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto= {questao.enunciado}/>
            {renderizarRespostas()}
        </div>
    )
}
