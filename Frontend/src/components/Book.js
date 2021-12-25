import React from 'react'
import "../styles/Book.css";
import { Link } from "react-router-dom"

function Book({ author, category, title, createdBy, date }) {
    return (
        <tr className='BookCmp'>
            <td className="tableTextColor">{author}</td>
            <td className="tableTextColor">{category}</td>
            <td className="tableTextColor">{title}</td>
            <td className="tableTextColor">
                <Link to={"/profile/" + createdBy}>{createdBy}</Link>
            </td>
            <td className="tableTextColor">{date}</td>
        </tr>
    )
}

export default Book
