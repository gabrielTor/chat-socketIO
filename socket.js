const {joinChat} = require('./controller')

async function sockets(io){
    io.on("connection", (socket) => {

        socket.on("join_room", async(data) => {
            const resp = await joinChat(data)
            socket.join(resp._id)
        })

        socket.on('typing', (data) => {
            io.emit('display', data)
        })

        socket.on("send_message", (data) => {
            socket.to(data.room).emit("receive_message", data)
        })

    })
}

module.exports = sockets