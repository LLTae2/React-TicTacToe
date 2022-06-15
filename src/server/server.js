const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001;  // 3001포트 사용
const route = require("../client1");

const http = require("http").createServer(app); //모듈 사용
const io = require("socket.io")(http);  //모듈 사용

app.use(bodyParser.json());

app.use(cors());
app.use("/", route);
////////////////////////////////////////////////

io.on("connection", function (socket) {
    console.log("소켓 접속 완료");

    socket.on("roomjoin", (userid) => { // roomjoin 이벤트명으로 데이터 받기 // socket.on
        console.log(userid);
        socket.join(userid); // userid로 방 만들기
    });

    socket.on("alert", (touserid) => {  // alert 이벤트로 데이터 받기
        io.to(touserid).emit("heejewake", touserid)  //  touserid: 클라이언트1이 보낸 데이터 "hwi"
    })                                               //  heejewake 이벤트 : hwi 에게 메시지 hwi를 보낸다
});
http.listen(port, () => {
    console.log(`express is running on ${port}`);
})