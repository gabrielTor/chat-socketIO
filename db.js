const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@gabrieldb.eixmphj.mongodb.net/ecommerce?retryWrites=true&w=majority`

async function connect(){
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(uri)
        console.log('connected to mongoDB')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connect