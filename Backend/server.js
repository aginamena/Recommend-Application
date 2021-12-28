const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 9000;
const usersRoute = require("./routes/usersRoute");
const bookRoute = require("./routes/bookRoute");
const path = require("path");
// console.log(usersRoute);

//setting up middleware
// we want to convert any incoming request from the client to 
// json format
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'Frontend/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'Frontend/build', 'index.html'));
    });
}

//importing the database function and running it
require("./config/dbconnect")();

//defining routes
// register user
app.use("/api/users", usersRoute);
app.use("/api/book", bookRoute);


app.listen(PORT, () => { console.log("Server is running!") })