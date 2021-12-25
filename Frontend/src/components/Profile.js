import React, { useState, useEffect } from 'react'
import "../styles/Profile.css";
import { useParams } from "react-router-dom";
import UserProfileBooks from './UserProfileBooks.js';

function Profile() {
    const { emailAddress } = useParams();
    const [books, setBooks] = useState([]);
    // we want to dispay another users profile too
    const userEmail = emailAddress ? emailAddress : localStorage.getItem("emailAddress");
    const isMyProfile = !userEmail || userEmail.substring(0, userEmail.indexOf('@')) === localStorage.getItem("emailAddress")
        .substring(0, userEmail.indexOf('@'));

    useEffect(() => {
        fetch("http://localhost:9000/api/book/" + userEmail)
            .then(response => response.json())
            .then(books => setBooks(books))
            .catch(error => console.log(error));
    }, [userEmail])
    function filterById(id) {
        const newBooks = books.filter(book => book._id != id);
        setBooks(newBooks);
    }
    return (
        <div className='container' id="profile">
            <h4>
                {/* dynamic user profile. if the profile is mine, display "My" otherwise the name of the
                other user */}
                {isMyProfile ? "My recommended books" :
                    userEmail.substring(0, userEmail.indexOf('@')) + "'s recommended books"}
            </h4>
            <div>{userEmail}</div>
            <div>{books.length} book(s) recommended</div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Category</th>
                        <th scope="col">Title</th>
                        <th scope="col">Created Date</th>
                        {
                            // we can only edit / delete our profile
                            isMyProfile && (
                                <>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <UserProfileBooks
                                author={book.author}
                                category={book.category}
                                title={book.title}
                                key={index}
                                date={book.date}
                                id={book._id}
                                filter={filterById}
                                isMyProfile={isMyProfile}
                            />
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Profile
