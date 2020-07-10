import React from "react";
import "./Info.css";

export class Info extends React.Component {
    getInfo() {
        switch (this.props.active) {
            case "dijkstra":
                return (
                    <p>
                        Dijkstra's Algorithm is <strong>weighted</strong> and{" "}
                        <strong>guarantees</strong> the shortest path!
                    </p>
                );
            case "aStar":
                return (
                    <p>
                        A* search is <strong>weighted</strong> and{" "}
                        <strong>guarantees</strong> the shortest path!
                    </p>
                );
            case "bestSearch":
                return (
                    <p>
                        Best-first Search is <strong>weighted</strong> and{" "}
                        <strong>does not guarantee</strong> the shortest path!
                    </p>
                );
            case "bfs":
                return (
                    <p>
                        Breadth-first Search is <strong>unweighted</strong> and{" "}
                        <strong>guarantees</strong> the shortest path!
                    </p>
                );
            case "dfs":
                return (
                    <p>
                        Depth-first Search is <strong>unweighted</strong> and{" "}
                        <strong>does not guarantee</strong> the shortest path!
                    </p>
                );
            case "none":
                return <p>Select a pathfinding algorithm to visualize it!</p>;
        }
    }

    render() {
        return this.getInfo();
    }
}
