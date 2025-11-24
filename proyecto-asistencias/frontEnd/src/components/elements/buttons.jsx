import React from "react";
import "../../assets/css/elements/buttons.scss";
export default function BlueButton({ text, onClick, type = "button", className = ""}) {
    return (
        <button className={`blue-button ${className}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
}