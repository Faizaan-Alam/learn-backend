const mongoose = require("mongoose");



async function connectdb(){
    await mongoose.connect("mongodb+srv://faizaan:pass@learnbackend.nzmovq0.mongodb.net/databse")
    console.log("conneceted to db")
}

module.exports = connectdb