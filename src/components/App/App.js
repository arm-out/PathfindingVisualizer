import React from "react";
import "./App.css";
import { PathfinderVisualizer } from "../PathfinderVisualizer/PathfinderVisualizer";
import { Header } from "../Header/Header";
import { Options } from "../Options/Options";

function App() {
    return (
        <div className='App'>
            <Header />
            <Options />
            <PathfinderVisualizer />
        </div>
    );
}

export default App;
