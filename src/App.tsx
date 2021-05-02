import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import {Setting} from "./Components/Setting/Setting";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Setting/>
                <Counter/>
            </header>
        </div>
    );
}

export default App;
