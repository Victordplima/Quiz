import { useEffect, useRef, useState } from "react";
import Questao from "../../components/Questao";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questaoMock = new QuestaoModel(1, "Melhor cor", [
    RespostaModel.errada("verde"),
    RespostaModel.certa("azul;"),
    RespostaModel.errada("rosa"),
    RespostaModel.errada("roxo"),
]);

export default function Home() {
    const [questao, setQuestao] = useState(questaoMock);
    const questaoRef = useRef<QuestaoModel>(questao)

    useEffect(() => {
        questaoRef.current = questao
    }, [questao])

    function respostaFornecida(indice: number) {
        setQuestao(questao.responderCom(indice));
    }

    function tempoEsgotado() {
        if (questao.naoRespondida) {
            setQuestao(questao.responderCom(-1));
        }
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Questao
                valor={questao}
                tempoParaResposta={15}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={tempoEsgotado}
            />
        </div>
    );
}
