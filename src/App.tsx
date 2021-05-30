import React from 'react';
import './App.css';
import {CounterContainer} from './Components/Counter/CounterContainer';
import {SettingContainer} from './Components/Setting/SettingContainer';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <CounterContainer/>
                <SettingContainer/>
            </header>
        </div>
    );
}


export default App;
