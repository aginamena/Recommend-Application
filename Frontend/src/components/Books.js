import React, { useEffect, useState } from 'react'
import Book from "./Book";
import "../styles/Books.css";


function Books(props) {
    const { shouldSort, sortBy } = props.sortByCategory;
    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (shouldSort) {
            //sorting by what the user entered in search box
            fetch("http://localhost:9000/api/book/searchBy/" + sortBy)
                .then(response => response.json())
                .then(books => setBooks(books))
                .catch(error => console.log(error));

        } else {
            fetch("http://localhost:9000/api/book")
                .then(response => response.json())
                .then(books => setBooks(books))
                .catch(error => console.log(error));
        }
    }, [sortBy])
    return (
        <div id="Books" className='container'>
            <h5>Total recommended books is {books.length}</h5>
            <div>
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
        </div>
    )
}

export default Books
