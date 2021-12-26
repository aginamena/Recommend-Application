const mongoose = require("mongoose");

//sechama is a blueprint from which we get our model
const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdBy: {
        // we are trying to reference the user who added to book to the book store
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })

//creating the model using the schema blueprint
//model is a way of structuring our data. It's the mediator between the
//frontend and the backend. If the newly created User isn't valid, we won't
//save it in the database
// we pass the name of the model and the schema to create the model
module.exports = mongoose.model("Book", bookSchema);