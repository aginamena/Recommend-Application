import React, { useState } from 'react'
import "../styles/Register.css";
import { Link } from "react-router-dom";
function Register(props) {
    const [userExists, setUserExists] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const password = document.querySelector("#password").value;
        const emailAddress = document.querySelector("#email").value;
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: emailAddress, password: password, name: name })
        }
        const url = "https://cryptic-shore-91810.herokuapp.com/"
        const response = await fetch(url + "api/users/register", options);
        const data = await response.json();
        if (data === "User already exist") {
            setUserExists(true);

        } else {
            setUserExists(false);
            props.setLogin(true);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("emailAddress", emailAddress);
            //we want to go to the home page
            window.location.href = "/"
        }
    }
    return (
        <>
            <div id="registerCmp">
                <h1 id="registerHeading">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" autoComplete='no' className="form-control" id="name" name="name" placeholder="Mena Agina" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" autoComplete='no' className="form-control" id="email" name="email" placeholder="Mena@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder=". . . . ." required />
                    </div>
                    <button type="submit" id="registerSubmitBtn">Register</button>
                </form>
            </div>
            {
                userExists && <div id="userExistsAlready">
                    <div>User already exists. You have to login or create a new account</div>
                    <Link to="/"><button>Login</button></Link>
                </div>
            }
        </>
    )
}

export default Register
