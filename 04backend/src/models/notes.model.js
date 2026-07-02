const { default: mongoose } = require("mongoose");
const mongoosee = require("mongoose");

const notesSchema = new mongoosee.Schema({
    title: String,
    discription: String,
    //age :Number 
})

const notemodel = mongoosee.model("notes", notesSchema)     
module.exports = notemodel