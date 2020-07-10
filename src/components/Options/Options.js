import React from "react";
import { Button } from "./Button/Button";
import "./Options.css";
import { Info } from "./Info/Info";

export class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dijkstra: false,
            aStar: false,
            bestSearch: false,
            bfs: false,
            dfs: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        this.setState({
            dijkstra: false,
            aStar: false,
            bestSearch: false,
            bfs: false,
            dfs: false,
        });

        this.setState({ [name]: true });
    }

    getActive() {
        let algos = Object.keys(this.state);
        let active = "none";

        for (let algo of algos) {
            if (this.state[String(algo)] == true) {
                console.log("FOUND");
                active = String(algo);
                break;
            }
        }

        return active;
    }

    render() {
        return (
            <div className='toolbar'>
                <div className='algorithms'>
                    <Button
                        name="Dijkstra's Algorithm"
                        type='dijkstra'
                        isActive={this.state.dijkstra}
                        onClick={this.handleClick}
                    />
                    <Button
                        name='A* Algorithm'
                        type='aStar'
                        isActive={this.state.aStar}
                        onClick={this.handleClick}
                    />
                    <Button
                        name='Best First Search'
                        type='bestSearch'
                        isActive={this.state.bestSearch}
                        onClick={this.handleClick}
                    />
                    <Button
                        name='BFS'
                        type='bfs'
                        isActive={this.state.bfs}
                        onClick={this.handleClick}
                    />
                    <Button
                        name='DFS'
                        type='dfs'
                        isActive={this.state.dfs}
                        onClick={this.handleClick}
                    />
                </div>
                <Info active={this.getActive()} />
                <div className='legend'>
                    <button>Visualize!</button>
                </div>
            </div>
        );
    }
}
