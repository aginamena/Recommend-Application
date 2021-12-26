import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

function EditBook() {
    const { bookId } = useParams();
    const history = useHistory();
    const [book, setBook] = useState({});

    useEffect(() => {
        //fetch book corresponding to the id
        fetch("http://localhost:9000/api/book/edit/" + bookId)
            .then(response => response.json())
            .then(books => setBook(books))
            .catch(error => console.log(error));
    }, [])
    async function handleSubmit(event) {
        event.preventDefault();
        const category = document.querySelector("#Category").value;
        const author = document.querySelector("#Author").value;
        const title = document.querySelector("#Title").value;
        const creatorEmail = localStorage.getItem("emailAddress");
        const dateCreated = new Date().toLocaleDateString("en-US");
        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ date: dateCreated, title: title, createdBy: creatorEmail, author: author, category: category })
        }
        await fetch("http://localhost:9000/api/book/" + bookId, options);
        history.push("/profile/" + creatorEmail);
    }
    return (
        <div id="AddBook">
            <div id="addBookHeading">
                <h5>Edit Book</h5>
            </div>
            <div>
                <form id="addBookForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <select className="form-control" id="Category" name="category" placeholder={book.category} required>
                            <option className="categoryItems">Fiction</option>
                            <option>Non-fiction</option>
                            <option>Poetry</option>
                            <option>Folktale</option>
                            <option>Drama</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="Author">Author</label>
                        <input type="text" placeholder={book.author} className="form-control" id="Author" name="author" required />
                    </div>
                    <div className="form-group">
                        <label for="Title">Title</label>
                        <input type="text" placeholder={book.title} name="title" className="form-control" id="Title" required />
                    </div>
                    <button type="submit">Edit Book</button>
                </form>
            </div>
        </div>
    )
}

export default EditBook
