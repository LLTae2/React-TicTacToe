import React from "react";
import "../App.css";

export default function Square(props) { //  1. props를 받아서
    return (
        <button className="square" onClick={props.onClick}> {/* 버튼을 클릭에 반응하게 만듦 */}
            {props.value} {/* 2. 버튼에 값을 넣음 */}
        </button>
    )
}