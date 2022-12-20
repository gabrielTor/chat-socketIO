const express = require("express")
const app = express()
const http = require("http")
const { Server } = require("socket.io")
const cors = require("cors")
const bodyParser = require("body-parser")
const connect = require('./db')
const sockets = require('./socket')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect()

const server = http.createServer(app)

const io = new Server(server, {
  cors:{
    // origin: "https://ecom-app-phi.vercel.app"
    origin: "http://localhost:3000"
  }
})

sockets(io)

server.listen(process.env.PORT, () => {
    console.log("WEBSOCKET SERVER IS RUNNING")
});