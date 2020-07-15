import React from "react";
import { Node } from "../Node/Node";
import "./PathfinderVisualizer.css";
import { dijkstra, getDijkstraPath } from "../../algorithms/dijkstra";

const numRows = 22;
const numCols = 55;

const START_COL = 5;
const START_ROW = 10;
const FINISH_COL = 45;
const FINISH_ROW = 10;

export class PathfinderVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            mousePressed: false,
        };

        this.initializeGrid = this.initializeGrid.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.visualizeDijkstra = this.visualizeDijkstra.bind(this);
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

    handleMouseDown(row, col) {
        const newGrid = getToggledWallGrid(this.state.grid, row, col);
        this.setState({
            grid: newGrid,
            mousePressed: true,
        });
    }

    handleMouseUp() {
        this.setState({ mousePressed: false });
    }

    handleMouseEnter(row, col) {
        if (!this.state.mousePressed) {
            return;
        }
        const newGrid = getToggledWallGrid(this.state.grid, row, col);
        this.setState({ grid: newGrid });
    }

    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    this.animateShortestPath(nodesInShortestPathOrder);
                }, 10 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                document.getElementById(
                    `node-${node.row}-${node.col}`
                ).className = "node node-visited";
            }, 10 * i);
        }
    }

    animateShortestPath(nodesInShortestPathOrder) {
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                document.getElementById(
                    `node-${node.row}-${node.col}`
                ).className = "node node-shortest-path";
            }, 50 * i);
        }
    }

    visualizeDijkstra() {
        const { grid } = this.state;
        const startNode = grid[START_ROW][START_COL];
        const finishNode = grid[FINISH_ROW][FINISH_COL];
        const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getDijkstraPath(finishNode);
        this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
    }

    render() {
        console.log(this.state.grid);
        const { grid, mousePressed } = this.state;
        return (
            <div className='grid-container'>
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
                                            row={row}
                                            col={col}
                                            isWall={isWall}
                                            isStart={isStart}
                                            isFinish={isFinish}
                                            mousePressed={mousePressed}
                                            onMouseDown={(row, col) =>
                                                this.handleMouseDown(row, col)
                                            }
                                            onMouseEnter={(row, col) =>
                                                this.handleMouseEnter(row, col)
                                            }
                                            onMouseUp={this.handleMouseUp}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
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

function getToggledWallGrid(grid, row, col) {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
        ...node,
        isWall: !node.isWall,
    };

    newGrid[row][col] = newNode;
    return newGrid;
}
