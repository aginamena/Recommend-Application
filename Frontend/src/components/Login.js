
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";
function Login(props) {
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();
    async function handleSubmit(event) {
        event.preventDefault();
        const password = document.querySelector("#password").value;
        const emailAddress = document.querySelector("#email").value;
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: emailAddress, password: password })
        }
        const response = await fetch("http://localhost:9000/api/users/login", options);
        const data = await response.json();
        if (data === "User Exist") {
            //go to home page
            setErrorMessage(false);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("emailAddress", emailAddress);
            props.setLogin(true);
        } else {
            setErrorMessage(true);
        }

    }
    return (
        <>
            <div id="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className="form-group">
                        <label for="password">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="MenaAgina@gmail.com" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder=". . . . ." required />
                    </div>
                    <button type="submit" id="loginBtn">Login</button>
                </form>
            </div>
            {
                errorMessage && (
                    <div id="loginErrorMessage">
                        <div>Invalid credentials. You have to register if you have not.</div>
                        <Link to="/register"><button>Register</button></Link>
                    </div>
                )
            }
        </>
    )
}

export default Login
