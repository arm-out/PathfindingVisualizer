import React from "react";
import "./App.css";
import { PathfinderVisualizer } from "../PathfinderVisualizer/PathfinderVisualizer";
import { Header } from "../Header/Header";
import { Options } from "../Options/Options";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Options />
                <PathfinderVisualizer />
            </div>
        );
    }
}

export default App;
