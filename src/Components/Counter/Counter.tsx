import React from "react";
import style from "./Counter.module.css";
import {ButtonCounter} from "./ButtonCounter/ButtonCounter";

interface ICounter {
    value: number,
    maxValue: number
    startValue:number
    inc: () => void
    reset: () => void
    isChange: boolean
}

export const Counter: React.FC<ICounter> = ({value, maxValue, isChange, inc, reset,startValue}) => {
    return (
        <div className={style.counter}>
            <div className={style.scoreboard}>
                {isChange
                    ? <div className={style.change}>Enter value and press 'set'</div>
                    : <div className={value < maxValue ? style.number : style.number_error}>
                        {value}
                    </div>
                }
            </div>
            <div className={style.controller_counter}>
                <ButtonCounter text={'inc'} onClick={() => inc()}
                               disabled={value === maxValue}/>
                <ButtonCounter text={'reset'} onClick={() => reset()}
                               disabled={value === startValue}/>
            </div>
        </div>
    );
}

