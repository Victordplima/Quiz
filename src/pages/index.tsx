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

export default function Home() {
    const [questao, setQuestao] = useState(questaoMock);

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
