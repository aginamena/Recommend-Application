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
    },
    password: {
        type: String,
        require: true
    }
})


//creating the model using the schema blueprint
//model is a way of structuring our data. It's the mediator between the
//frontend and the backend. If the newly created User isn't valid, we won't
//save it in the database
// we pass the name of the model and the schema to create the model
const User = mongoose.model("User", UserSchema);
module.exports = User;