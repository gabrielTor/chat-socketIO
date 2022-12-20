const Chat = require('./Models/Chat')

const newChat = async(chat) => {
    try {
        const createChat = await Chat.create(chat)
        return createChat
    } catch (error) {
        console.error(error)
    }
}

const joinChat = async(chat) => {
    const {userId, sellerUserId, productId} = chat
    try {
        const room = await Chat.find({userId, sellerUserId, productId})
        return room.length ? room[0] : await newChat(chat) 
    } catch (error) {
        console.error(error)
    }
}

module.exports = {joinChat}