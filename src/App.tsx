import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Setting} from "./Components/Setting/Setting";

function App() {
    const [valueCounter, setValueCounter] = useState<number>(0);
    const [maxValueCounter, setMaxValueCounter] = useState<number>(0);
    const [startValueSetting, setStartValueSetting] = useState(0);
    const [maxValueSetting, setMaxValueSetting] = useState<number>(0);
    const [isChange,setIsChange] = useState<boolean>(false);

    useEffect(() => {
        let getMaxValueCounter = localStorage.getItem("valueCounter");
        let getMaxValueSetting = localStorage.getItem("maxValueSetting");
        let getStartValueSetting = localStorage.getItem("startValueSetting");
        if (getMaxValueCounter && getMaxValueSetting && getStartValueSetting) {
            setValueCounter(JsonParser(getStartValueSetting));
            setMaxValueCounter(JsonParser(getMaxValueSetting));
            setStartValueSetting(JsonParser(getStartValueSetting));
            setMaxValueSetting(JsonParser(getMaxValueSetting));
        }
    }, []);


    const inc = () => {
        if (valueCounter < maxValueCounter) {
            setValueCounter(valueCounter + 1);
        }
    };
    const reset = () => {
        let getStartValue = localStorage.getItem("startValueSetting");
        if (getStartValue) {
            setValueCounter(JsonParser(getStartValue));
        }
    };

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSetting(JSON.parse(e.currentTarget.value));
        setIsChange(true);
    };
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueSetting(JSON.parse(e.currentTarget.value));
        setIsChange(true);
    };
    const setOnClick = () => {
        if (startValueSetting >= 0 && maxValueSetting > 0) {
            setMaxValueCounter(maxValueSetting);
            setValueCounter(startValueSetting);
            localStorage.setItem("maxValueCounter", JsonParser(maxValueCounter));
            localStorage.setItem("valueCounter", JsonParser(valueCounter));
            localStorage.setItem("maxValueSetting", JsonParser(maxValueSetting));
            localStorage.setItem("startValueSetting", JsonParser(startValueSetting));
            setIsChange(false);
        }
    }

    const enterValue = () => {
        let getValueCounter = localStorage.getItem("valueCounter");
        if (getValueCounter) {
            const get = JsonParser(getValueCounter);
            if (get !== valueCounter) {
                return "Enter value and press 'set'";
            }
        }
        return valueCounter
    }

    return (
        <div className="App">
            <header className="App-header">
                <Setting startValue={startValueSetting} maxValue={maxValueSetting}
                         set={setOnClick}
                         changeMaxValue={changeMaxValue}
                         changeStartValue={changeStartValue}
                />
                <Counter value={valueCounter} maxValue={maxValueCounter}
                         inc={inc} reset={reset} isChange={isChange}/>
            </header>
        </div>
    );
}


export default App;


const JsonParser = (value: number | string) => {
    if (typeof value === "number") {
        return JSON.stringify(value);
    } else {
        return JSON.parse(value);
    }
}