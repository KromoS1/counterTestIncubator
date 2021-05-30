import React, {ChangeEvent} from "react";
import style from "./Setting.module.css"
import {ButtonCounter} from "../Counter/ButtonCounter/ButtonCounter";

interface ISetting {
    startValue: number,
    maxValue: number,
    isChange: boolean
    set: () => void,
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Setting: React.FC<ISetting> = ({
                                                startValue, maxValue, set, changeMaxValue, changeStartValue, isChange
                                            }) => {
    return (
        <div className={style.setting}>
            <div className={style.setting_value}>
                <div className={style.value}>
                    <text className={style.text}>max value:</text>
                    <input className={maxValue < 0 ? style.error : style.value_input}
                           type={"number"}
                           value={maxValue}
                           onChange={changeMaxValue}/>
                </div>
                <div className={style.value}>
                    <text className={style.text}>start value:</text>
                    <input className={startValue < 0 ? style.error : style.value_input}
                           type={"number"}
                           value={startValue}
                           onChange={changeStartValue}/>
                </div>
            </div>
            <div className={style.boar_save_btn}>
                <ButtonCounter text={"set"} onClick={set} disabled={!isChange}/>
            </div>
        </div>
    )
}

