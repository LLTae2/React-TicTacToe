import React, { useState } from "react";
import io from "socket.io-client"; // 모듈 가져오기

const socket =  io("http://local:host3001/"); //3001번 포트 사용(서버)

export default function Message(props) {
    const [userid, setUserid] = useState("been"); // userid "been"
    const componentWillMount = () => {
        socket.emit("roomjoin", userid); // been이라는 방 만들기
    }
    onclick = (e) => {
        const str = "hwi";    // 버튼을 클릭하면
        socket.emit("alert", str); // 서버의 소켓 alert이벤트에 "hwi"를 보낸다
    };
    return (
        <div>
            <button onClick={onclick}>알림창 보내기</button>   // 버튼 클릭
        </div>
    )
}