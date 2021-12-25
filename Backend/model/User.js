const mongoose = require("mongoose");

//sechama is a blueprint from which we get our model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        // we also don't want to have duplicate emails, so we do index : true
        // index: true
    },
    password: {
        type: String,
        require: true
    }
})

//we want to also identify each book by the person that created it
// UserSchema.virtual("books", {
//     ref: "Book",
//     foreignField: "createdBy",
//     localField: "_id"
// })
// UserSchema.set("toJSON", { virtuals: true })

//creating the model using the schema blueprint
//model is a way of structuring our data. It's the mediator between the
//frontend and the backend. If the newly created User isn't valid, we won't
//save it in the database
// we pass the name of the model and the schema to create the model
const User = mongoose.model("User", UserSchema);
module.exports = User;