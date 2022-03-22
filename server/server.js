const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require("dotenv").config();

let table = {
    "red": [{id: 10, msg: "Valami", ch: "red"}, {id: 10, msg: "Teszt", ch: "red"}, {id: 10, msg: "Üzi", ch: "red"}],
    "green": [],
    "blue":[]
}
app.use(express.static(process.env.UIFOLDER));

app.get("/", (req, res) => {
    res.sendFile("../ui/index.html");
});
app.get("/red", (req, res)=>{
    res.json(table["red"]);
});
app.get("/blue", (req, res)=>{
    res.json(table["blue"]);
});
app.get("/green", (req, res)=>{
    res.json(table["green"]);
});
io.on('connection', (socket) => {
    console.log('a user connected');
    //nem msg
    socket.on("msg-reg", ({"msg": msg, "id": id, "ch": ch}) => {
        console.log({"msg": msg, "id": id, "ch": ch});
        try {
            table[ch].push({"msg": msg, "id": id});
            io.to(ch).emit("msg", {"msg": msg, "id": id, "ch": ch});
            
        } catch (error) {
            console.log(error);
        }
    });
    //join rom
    socket.on("join", (ch)=>{
        socket.join(ch);
    });
  });
  
server.listen(3000, () => {
console.log('listening on *:3000');
});
