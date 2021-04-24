import React, {useState} from "react";
import s from "./Counter.module.css";

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
        <div className={s.counter}>
            <div className={s.scoareboard}>
                <div className={numberClick < 5 ? s.number : s.number_error}>
                    {numberClick}
                </div>
            </div>
            <div className={s.controller_counter}>
                <button className={numberClick < 5 ?
                    s.inc : s.dontActive}
                        onClick={() => inc()}>inc
                </button>
                <button className={numberClick === 0 ?
                    s.dontActive : s.reset}
                        onClick={() => reset()}>reset
                </button>
            </div>
        </div>
    );
}