const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 9000;
const usersRoute = require("./routes/usersRoute");
const bookRoute = require("./routes/bookRoute");
// console.log(usersRoute);

//setting up middleware
// we want to convert any incoming request from the client to 
// json format
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//importing the database function and running it
require("./config/dbconnect")();

//defining routes
// register user
app.use("/api/users", usersRoute);
app.use("/api/book", bookRoute);


app.listen(PORT, () => { console.log("Server is running!") })