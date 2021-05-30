import React from "react";
import style from "./Setting.module.css"
import {ButtonCounter} from "../Counter/ButtonCounter/ButtonCounter";
import {SettingContainerType} from "./SettingContainer";


export const Setting: React.FC<SettingContainerType> = (props) => {
    const conditionDisable = () => {
        if (props.maxValue <= props.startValue){
            return true
        }else if(props.startValue < 0 || props.maxValue < 0){
            return true
        }else{
            return !props.isChange
        }
    }
    const resultCondition = conditionDisable();
    return (
        <div className={style.setting}>
            <div className={style.setting_value}>
                <div className={style.value}>
                    <text className={style.text}>max value:</text>
                    <input className={props.maxValue < 0 ? style.error : style.value_input}
                           type={"number"}
                           value={props.maxValue}
                           onChange={props.changeMaxValue}/>
                </div>
                <div className={style.value}>
                    <text className={style.text}>start value:</text>
                    <input className={props.startValue < 0 ? style.error : style.value_input}
                           type={"number"}
                           value={props.startValue}
                           onChange={props.changeStartValue}/>
                </div>
            </div>
            <div className={style.boar_save_btn}>
                <ButtonCounter text={"set"} onClick={props.set} disabled={resultCondition}/>
            </div>
        </div>
    )
}

