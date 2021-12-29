const mongoose = require("mongoose");

//connecting to mongoose and setting its configuration
// we use mongo db compase to test uring mongoDb compass
// we also have to change the name of the database from test to <any name we want >
// const url = "mongodb+srv://menaagina:BE5ej9mrXWW71PhE@cluster0.ahqbc.mongodb.net/booking-keeping";
// this is a remote connection with mongo dB atlis and not from our localhost
// const connectToDB = "mongodb+srv://menaagina:BE5ej9mrXWW71PhE@cluster0.ahqbc.mongodb.net/Recommend-App";
const url = "mongodb+srv://menaagina:BE5ej9mrXWW71PhE@cluster0.ahqbc.mongodb.net/Recommend-App";
const dbConnect = () => {
    mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("Connected to the database"))
        .catch(error => console.log(error));
}

module.exports = dbConnect;