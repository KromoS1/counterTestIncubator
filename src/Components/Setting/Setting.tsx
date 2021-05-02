import React from "react";
import style from "./Setting.module.css"

export const Setting = () => {
    return (
        <div className={style.setting}>
            <div className={style.setting_value}>
               <div className={style.value}>
                   <text>max value:</text>
                   <input type={"number"}/>
               </div>
                <div className={style.value}>
                    <text>start value:</text>
                    <input type={"number"} />
                </div>
            </div>
            <div className={style.boar_save_btn}>
                <button className={style.btn_active}>set</button>
            </div>
        </div>
    )
}