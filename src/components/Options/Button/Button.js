import React from "react";
import "./Button.css";

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    componentDidUpdate() {
        this.render();
    }

    render() {
        let active = "";
        if (this.props.isActive) {
            active = "active";
        }
        return (
            <button
                className={`button ${active}`}
                onClick={() => {
                    this.props.onClick(this.props.type);
                }}
            >
                {this.props.name}
            </button>
        );
    }
}
