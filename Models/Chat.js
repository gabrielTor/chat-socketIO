const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        sellerUserId: {
            type: String,
            required: true
        },
        productId: {
            type: String,
            required: true
        },
        messages: [{ 
            text: String,
            currentUser: String,
            read: {
                type: Boolean,
                default: true
            }
        }]
    }
)

module.exports = mongoose.model('Chat', chatSchema)