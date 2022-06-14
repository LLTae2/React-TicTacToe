import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");

export default function Message(props) {
    const [userid, setUserid] = useState("hwi");
    const componentWillMount = () => {
        socket.emit("roomjoin", userid);
        socket.on("heejewake", (message) => {
            alert(message);
        });
    }
    return (
        <div></div>
    );
}
