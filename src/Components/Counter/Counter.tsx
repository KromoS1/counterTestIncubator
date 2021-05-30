import React from "react";
import style from "./Counter.module.css";
import {ButtonCounter} from "./ButtonCounter/ButtonCounter";
import {CounterContainerType} from "./CounterContainer";


export const Counter: React.FC<CounterContainerType> = (props) => {
    return (
        <div className={style.counter}>
            <div className={style.scoreboard}>
                {props.isChange
                    ? <div className={style.change}>Enter value and press 'set'</div>
                    : <div className={props.value < props.maxValue ? style.number : style.number_error}>
                        {props.value}
                    </div>
                }
            </div>
            <div className={style.controller_counter}>
                <ButtonCounter text={'inc'} onClick={() => props.inc()}
                               disabled={props.value === props.maxValue || props.isChange}/>
                <ButtonCounter text={'reset'} onClick={() => props.reset()}
                               disabled={props.value === props.startValue || props.isChange}/>
            </div>
        </div>
    );
}

