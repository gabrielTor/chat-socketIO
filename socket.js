const {getMessages, sendMessages} = require('./controller')

async function sockets(io){
    io.on("connection", (socket) => {

        socket.on("join_room", async(data) => {
            socket.join(data)
        })

        socket.on('typing', (data) => {
            io.emit('display', data)
        })

        socket.on("send_message", async(data) => {
            await sendMessages(data, data.room)
            socket.to(data.room).emit("receive_message", data)
        })
        
        socket.on("get_messages", async(data) => {
            const resp = await getMessages(data)
            socket.emit("load_messages", resp)
        })

    })
}

module.exports = sockets