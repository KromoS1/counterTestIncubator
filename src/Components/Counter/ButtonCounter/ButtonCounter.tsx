import React from "react";
import style from "./ButtonCounter.module.css";

type ButtonIntType = {
    text:string
    onClick: () => void
    disabled: boolean
}

export const ButtonCounter: React.FC<ButtonIntType> = (props) => {
    return (
        <div>
            <button className={style.button} onClick={() => props.onClick()}
                    disabled={props.disabled}>{props.text}</button>
        </div>
    )
}