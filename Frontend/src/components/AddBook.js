import React from 'react';
import "../styles/AddBook.css";
import { useHistory } from "react-router-dom";

function AddBook() {
    const history = useHistory();
    async function handleSubmit(event) {
        event.preventDefault();
        const category = document.querySelector("#Category").value;
        const author = document.querySelector("#Author").value;
        const title = document.querySelector("#Title").value;
        //get the users login email address to create a book
        const creatorEmail = localStorage.getItem("emailAddress");
        const dateCreated = new Date().toLocaleDateString("en-US");
        // const creatorEmail = document.querySelector("#creatorEmail").value;
        // console.log(JSON.stringify({ email: emailAddress, password: password }));
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ date: dateCreated, title: title, createdBy: creatorEmail, author: author, category: category })
        }
        try {
            const response = await fetch("http://localhost:9000/api/book", options);
            // console.log(response);
            const data = await response.json();
            // redirect to the users profile page
            history.push("/profile/" + creatorEmail);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div id="AddBook">
            <div id="addBookHeading">
                <h5>Create Book</h5>
            </div>
            <div>
                <form id="addBookForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="Category">Category</label>
                        <select className="form-control" id="Category" name="category" required>
                            <option className="categoryItems">Fiction</option>
                            <option>Non-fiction</option>
                            <option>Poetry</option>
                            <option>Folktale</option>
                            <option>Drama</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="Author">Author</label>
                        <input type="text" className="form-control" id="Author" name="author" placeholder="Author's name" required />
                    </div>
                    <div className="form-group">
                        <label for="Title">Title</label>
                        <input type="text" name="title" className="form-control" id="Title" placeholder="Name of Book" required />
                    </div>
                    {/* <div className="form-group">
                        <label for="creatorEmail">Your Email</label>
                        <input type="email" name="creatorEmail" className="form-control" id="creatorEmail" placeholder="MenaAgina@gmail.com" required />
                    </div> */}
                    <button type="submit">Create Book</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook
