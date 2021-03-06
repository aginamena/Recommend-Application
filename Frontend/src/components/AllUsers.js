import React, { useState, useEffect } from 'react'
import "../styles/AllUsers.css";
import { Link } from "react-router-dom"
function AllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const url = "https://cryptic-shore-91810.herokuapp.com/api/users";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(books => setAllUsers(books))
    }, [])
    return (
        <div id="allUsers" className='container'>
            <h5>Total of {allUsers.length} users</h5>
            <div>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((users, index) => (
                                <tr key={index}>
                                    <td className='userInfo'>{users.name}</td>
                                    <td td className='userInfo'>
                                        <Link to={"/profile/" + users.email}>{users.email}</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers
