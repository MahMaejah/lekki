import React from "react";

const Button = props => {
    return (
        <button
            style={{margin: "12px 7px 12px 0"}}
            className={
                props.type === "primary" ? "btn btn-success" : "btn btn-secondary"
            }
            onClick={props.action}
        >
            {props.title}
        </button>
    )
}

export default Button