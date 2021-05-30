import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Setting} from "./Components/Setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {actions, AppStateType} from "./BLL/Store";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value);
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const dispatch = useDispatch()

    const [isChange, setIsChange] = useState<boolean>(true);

    const inc = () => {
        dispatch(actions.incValueAC());
    };
    const reset = () => {
        dispatch(actions.resetValue())
    };

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.incMaxValue(JSON.parse(e.currentTarget.value)))
        setIsChange(true);
    };

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.incStartValue(JSON.parse(e.currentTarget.value)))
        setIsChange(true);
    };
    const setOnClick = () => {
        if (startValue >= 0 && maxValue > 0) {
            dispatch(actions.setValueAC())
            setIsChange(false);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Setting startValue={startValue} maxValue={maxValue}
                         set={setOnClick}
                         changeMaxValue={changeMaxValue}
                         changeStartValue={changeStartValue}
                         isChange={isChange}
                />
                <Counter value={value} maxValue={maxValue} startValue={startValue}
                         inc={inc} reset={reset} isChange={isChange}/>
            </header>
        </div>
    );
}


export default App;
