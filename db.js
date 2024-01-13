const mongoose = require("mongoose");
const { boolean } = require("zod");

// mongoose.connect("mongodb+srv://admin:password@cluster0.2nhmnw1.mongodb.net/todos")
//If you want to try create account on mongodb and connect your server using above line.

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports ={
    todo
}