import React from "react";
import "../App.css";

export default function Square(props) {
    console.log("이것이 1일 1커밋이다!");
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}