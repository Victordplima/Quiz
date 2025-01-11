import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";
import Questionario from "../../components/Questionario";

const questaoMock = new QuestaoModel(1, "Melhor cor", [
    RespostaModel.errada("verde"),
    RespostaModel.certa("azul;"),
    RespostaModel.errada("rosa"),
    RespostaModel.errada("roxo"),
]);

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
    const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);

    async function carregarIdsDasQuestoes() {
        const resp = await fetch(`${BASE_URL}/questionario`);
        const idsDasQuestoes = await resp.json();
        setIdsDasQuestoes(idsDasQuestoes);
    }
    async function carregarQuestao(idQuestao: number) {
        const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
        const json = await resp.json();
        console.log(json);
    }

    useEffect(() => {
        carregarIdsDasQuestoes();
    }, []);

    useEffect(() => {
        idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
    }, [idsDasQuestoes]);

    function questaoRespondida(questao: QuestaoModel) {}

    function irPraProximoPasso() {}

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Questionario
                questao={questao}
                ultima={true}
                questaoRespondida={questaoRespondida}
                irPraProximoPasso={irPraProximoPasso}
            />
        </div>
    );
}
