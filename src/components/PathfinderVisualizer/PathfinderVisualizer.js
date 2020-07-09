import React from "react";
import { Node } from "../Node/Node";

const numRows = 20;
const numCols = 50;

const START_COL = 5;
const START_ROW = 10;
const FINISH_COL = 45;
const FINISH_ROW = 10;

export class PathfinderVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
        };

        this.initializeGrid = this.initializeGrid.bind(this);
    }

    initializeGrid() {
        let tempGrid = new Array(numRows);
        for (let i = 0; i < tempGrid.length; i++) {
            tempGrid[i] = new Array(numCols);
        }

        for (let row = 0; row < tempGrid.length; row++) {
            for (let col = 0; col < tempGrid[row].length; col++)
                tempGrid[row][col] = createNode(row, col);
        }

        this.setState({ grid: tempGrid });
    }

    componentDidMount() {
        this.initializeGrid();
    }

    render() {
        console.log(this.state.grid);
        const { grid } = this.state;
        return (
            <div className='grid'>
                {grid.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex}>
                            {row.map((node, nodeIndex) => {
                                const {
                                    row,
                                    col,
                                    isWall,
                                    isStart,
                                    isFinish,
                                } = node;
                                return (
                                    <Node
                                        key={nodeIndex}
                                        col={col}
                                        isWall={isWall}
                                        isStart={isStart}
                                        isFinish={isFinish}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

function createNode(row, col) {
    return {
        col,
        row,
        isStart: row === START_ROW && col === START_COL,
        isFinish: row === FINISH_ROW && col === FINISH_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
    };
}
