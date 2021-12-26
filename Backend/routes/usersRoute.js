const express = require("express");
const User = require("../model/User");
const expressMiddlewareErrorHandler = require("express-async-handler");

//creating an instance of express router
const usersRoute = express.Router();

usersRoute.post("/register", async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
        res.json("User already exist")
    } else {
        res.status(200);
        const newlyCreatedUser = await User.create(req.body);
        res.json("New user created");
    }
});

// login route
usersRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email: email, password: password });
    if (userExists) {
        res.json("User Exist");
    } else {
        res.json("User doesn't exist")
    }
})

usersRoute.get("/", async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
})

module.exports = usersRoute;