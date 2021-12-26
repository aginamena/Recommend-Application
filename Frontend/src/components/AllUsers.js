import React, { useState, useEffect } from 'react'
import "../styles/AllUsers.css";
import { Link } from "react-router-dom"
function AllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/api/users")
            .then(response => response.json())
            .then(books => setAllUsers(books))
            .catch(error => console.log(error));
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
                                    {/* <Link to={"/profile/" + users.email}><td className='userInfo'>{users.email}</td></Link> */}
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
