import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.id) {
        return res.status(400).json({ error: "ID não fornecido" });
    }

    const idSelecionado = +req.query.id;

    const unicaQuestaoOuNada = questoes.filter(
        (questao) => questao.id === idSelecionado
    );

    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
        res.status(200).json(questaoSelecionada.converterParaObjeto());
    } else {
        res.status(204).end();
    }
}
