import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(1001, "Quem era o deus do submundo na mitologia grega?", [
        RespostaModel.certa("Hades"),
        RespostaModel.errada("Zeus"),
        RespostaModel.errada("Poseidon"),
        RespostaModel.errada("Apolo"),
    ]),
    new QuestaoModel(1002, "Na mitologia nórdica, qual é o nome da árvore que conecta os nove mundos?", [
        RespostaModel.certa("Yggdrasil"),
        RespostaModel.errada("Valhalla"),
        RespostaModel.errada("Jörmungandr"),
        RespostaModel.errada("Asgard"),
    ]),
    new QuestaoModel(1003, "Qual era o nome do deus egípcio da morte e do julgamento?", [
        RespostaModel.certa("Anúbis"),
        RespostaModel.errada("Osíris"),
        RespostaModel.errada("Rá"),
        RespostaModel.errada("Thoth"),
    ]),
    new QuestaoModel(1004, "Na mitologia grega, quem foi condenado a rolar uma pedra montanha acima por toda a eternidade?", [
        RespostaModel.certa("Sísifo"),
        RespostaModel.errada("Tântalo"),
        RespostaModel.errada("Prometeu"),
        RespostaModel.errada("Íxion"),
    ]),
    new QuestaoModel(1005, "Na mitologia japonesa, quem era a deusa do sol?", [
        RespostaModel.certa("Amaterasu"),
        RespostaModel.errada("Tsukuyomi"),
        RespostaModel.errada("Susanoo"),
        RespostaModel.errada("Izanami"),
    ]),
];

export default questoes;
