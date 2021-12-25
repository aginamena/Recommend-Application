const express = require("express");
const Book = require("../model/Book");

//creating an instance of express router
const bookRoute = express.Router();


bookRoute.post("/", async (req, res) => {
    // console.log(req.body);
    const book = await Book.create(req.body);
    if (book) {
        // res.status(200);
        //sending all the books to the frontend
        // const allbooks = await Book.find();
        //the frontend should be able to handle a case when there's no book
        // res.send(allbooks);
        res.json("book added")
    } else {
        res.json("book can't be added")
        // res.status(500);
        // res.send("Error creating the book");
    }

});


// update book
bookRoute.put("/:id", async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.send(updatedBook);
})

// delete book
bookRoute.delete("/:id", async (req, res) => {
    // we have a dynamic id
    const book = await Book.findById(req.params.id);
    if (book) {
        await Book.findByIdAndRemove(req.params.id);
        res.send("Book deleted");
    } else {
        res.send("Can't find book to delete");
    }
})


//get book by its id
bookRoute.get("/edit/:bookId", async (req, res) => {
    const { bookId } = req.params;
    const book = await Book.findById({ _id: bookId })
    res.send(book);
})

//get all the books the corresponding to the users email
bookRoute.get("/:emailAddress", async (req, res) => {
    const { emailAddress } = req.params;
    const userCreatedBooks = await Book.find({ createdBy: emailAddress })
    res.send(userCreatedBooks);
})
//get all the books in the database
bookRoute.get("/", async (req, res) => {
    const allbooks = await Book.find();
    //the frontend should be able to handle a case when there's no book
    res.send(allbooks);
})

module.exports = bookRoute;