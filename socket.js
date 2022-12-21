const {getMessages, sendMessages} = require('./controller')

async function sockets(io){
    io.on("connection", (socket) => {

        socket.on("join_room", async(data) => {
            socket.join(data)
        })

        socket.on('typing', (data) => {
            io.to(data.room).emit('display', data)
        })

        socket.on("send_message", async(data) => {
            socket.to(data.room).emit("receive_message", data)
            await sendMessages(data, data.room)
        })

    })
}

module.exports = sockets