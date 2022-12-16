const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
require('dotenv').config()

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
      origin: "https://ecom-app-phi.vercel.app",
      // origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data)
  })
  // socket.on('typing', (data)=>{
  //   if(data.typing){
  //     io.emit('display', data)
  //   }
  // })
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data)
  })
})


server.listen(process.env.PORT, () => {
    console.log("WEBSOCKET SERVER IS RUNNING")
});