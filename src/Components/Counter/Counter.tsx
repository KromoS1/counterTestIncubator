import React, {useState} from "react";
import style from "./Counter.module.css";

export default function Counter() {
    const [numberClick, setNumberClick] = useState<number>(0);

    const inc = () => {
        if (numberClick < 5) {
            setNumberClick(numberClick + 1);
        } else {

        }
    }
    const reset = () => {
        setNumberClick(0);
    }

    return (
        <div className={style.counter}>
            <div className={style.scoreboard}>
                <div className={numberClick < 5 ? style.number : style.number_error}>
                    {numberClick}
                </div>
            </div>
            <div className={style.controller_counter}>
                <button className={numberClick < 5 ?
                    style.inc : style.dontActive}
                        onClick={() => inc()}>inc
                </button>
                <button className={numberClick === 0 ?
                    style.dontActive : style.reset}
                        onClick={() => reset()}>reset
                </button>
            </div>
        </div>
    );
}