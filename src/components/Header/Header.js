import React from "react";
import "./Header.css";
import github from "./github-logo.png";

export class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>
                    Pathfinding Visualizer
                    <span className='by-line'>by Armin Suraj</span>
                </h1>
                <a
                    href='https://github.com/arm-out/PathfindingVisualizer'
                    target='_blank'
                >
                    <img src={github} />
                </a>
            </div>
        );
    }
}
