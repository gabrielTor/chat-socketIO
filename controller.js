const Chat = require('./Models/Chat')

const sendMessages = async(message, id) => {
    try {
        const chat = await Chat.findById(id)
        chat.messages = [
            ...chat?.messages, {
                text: message.text,
                currentUser: message.currentUser,
            }
        ]
        await chat.save()
    } catch (error) {
        console.error(error)
    }
}

module.exports = {sendMessages}