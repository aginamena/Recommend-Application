import React, { useState, useEffect } from 'react'
import "../styles/Profile.css";
import UserProfileBooks from './UserProfileBooks.js';

function Profile() {
    const [books, setBooks] = useState([]);
    const userEmail = localStorage.getItem("emailAddress");
    useEffect(() => {
        fetch("http://localhost:9000/api/book/" + userEmail)
            .then(response => response.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error));
    }, [])
    function filterById(id) {
        const newBooks = books.filter(book => book._id != id);
        setBooks(newBooks);
    }
    return (
        <div className='container' id="profile">
            <h4>My recommended books</h4>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Title</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            // <Book
                            //     author={book.author}
                            //     category={book.category}
                            //     title={book.title}
                            //     key={index}
                            // />
                            <UserProfileBooks
                                author={book.author}
                                category={book.category}
                                title={book.title}
                                key={index}
                                date={book.date}
                                id={book._id}
                                filter={filterById}
                            />
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Profile
