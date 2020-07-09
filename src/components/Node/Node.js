import React from "react";
import "./Node.css";

export class Node extends React.Component {
    render() {
        const {
            col,
            isFinish,
            isStart,
            isWall,
            // onMouseDown,
            // onMouseEnter,
            // onMouseUp,
            row,
        } = this.props;

        const extraClassName = isFinish
            ? "node-finish"
            : isStart
            ? "node-start"
            : isWall
            ? "node-wall"
            : "";

        return (
            <div
                id={`node-${row}-${col}`}
                className={`node ${extraClassName}`}
            ></div>
        );
    }
}
