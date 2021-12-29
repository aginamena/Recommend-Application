
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
        // "http://localhost:9000/api/users/login"
        const url = "https://cryptic-shore-91810.herokuapp.com/api/users/login"
        console.log(url);
        const response = await fetch(url, options);
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
                    <div id="loginBtnAndRegBtn">
                        <button type="submit" id="loginBtn">Login</button>
                        <span >OR</span>
                        <Link to="/register"><button id="loginRegisterBtn">Register</button></Link>
                    </div>
                </form>
            </div>
            {
                errorMessage && (
                    <div id="loginErrorMessage">
                        <div>Invalid credentials. You have to register if you have not.</div>
                    </div>
                )
            }
        </>
    )
}

export default Login
