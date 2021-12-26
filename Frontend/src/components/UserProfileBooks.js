import React from 'react'
import "../styles/Book.css";
import { Link } from "react-router-dom"

function UserProfileBooks(props) {
    async function deleteBook() {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        }
        // we delete from the backend and filter from the frontend
        const response = await fetch("http://localhost:9000/api/book/" + props.id, options);
        props.filter(props.id);
    }
    return (

        <tr className='BookCmp'>
            <td className="tableTextColor" id="userProfileBookAuthor">{props.author}</td>
            <td className="tableTextColor" id="userProfileBookCategory">{props.category}</td>
            <td className="tableTextColor" id="userProfileBookTitle">{props.title}</td>
            <td className="tableTextColor">{props.date}</td>
            {
                props.isMyProfile && (
                    <>
                        {/* we can only edit / delete our profile */}
                        <td>
                            <Link to={"/editBook/" + props.id}><i className="fas fa-edit"></i></Link>
                        </td>
                        <td><i className="fas fa-trash-alt" onClick={() => deleteBook()}></i></td>
                    </>
                )
            }
        </tr>

    )
}

export default UserProfileBooks
