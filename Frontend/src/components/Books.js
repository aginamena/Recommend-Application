import React, { useEffect, useState } from 'react'
import AddBook from './AddBook'
import Book from "./Book";
import "../styles/Books.css";


function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/api/book")
            .then(response => response.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error));
    }, [])
    return (
        <div id="Books" className='container'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Title</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <Book
                                author={book.author}
                                category={book.category}
                                title={book.title}
                                date={book.date}
                                createdBy={book.createdBy}
                                key={index}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Books
