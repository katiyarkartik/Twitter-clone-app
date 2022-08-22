const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        })
        console.log(`MongoDB server started running at ${connection.connection.host}`.green.inverse)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB