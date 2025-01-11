import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../src/styles/Temporizador.module.css";

interface TemporizadorProps {
    key: any;
    duracao: number;
    tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                size={120}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors={["#37e9bb", "#F7B801", "#ED827A"]}
                colorsTime={[props.duracao, props.duracao * 0.66, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
}
