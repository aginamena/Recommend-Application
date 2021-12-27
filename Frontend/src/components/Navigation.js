import React, { useState } from 'react'
import "../styles/Navigation.css";
import { Link, useHistory } from "react-router-dom";

function Navigation(props) {
    const history = useHistory();
    const [currentTab, setCurrentTab] = useState("Home");
    function logout() {
        //the user is no longer loggedin. 
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("emailAddress");
        props.setLogin(false);
    }
    const styling = {
        backgroundColor: "#2aa198",
        color: "white ",
        borderRadius: "10px"
    }
    function allBookPage() {
        setCurrentTab("All books");
        props.searchByCategory({
            shouldSort: false,
            sortBy: ""
        });
    }

    return (
        <nav className="navbar navbar-expand-lg" id="Navigation">
            <a className="navbar-brand" href="#">Recommend</a>
            {props.isLoggedIn &&
                // only when the user logs in that we want to display the rest of the navigation
                <>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: "white" }}>
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/"><a href="#" className="nav-item nav-link" style={currentTab == "Home" ? styling
                                : {}} onClick={() => setCurrentTab("Home")}>Home</a></Link>
                            <Link to="/books"><a href="#" className="nav-item nav-link" style={currentTab == "All Books" ? styling
                                : {}} onClick={() => allBookPage()}>All Books</a></Link>
                            <Link to="/addBook"><a href="#" className="nav-item nav-link" style={currentTab == "Add Book" ? styling
                                : {}} onClick={() => setCurrentTab("Add Book")}>Add Book</a></Link>
                            <Link to="/allUsers"><a href="#" className="nav-item nav-link" style={currentTab == "All Users" ? styling
                                : {}} onClick={() => setCurrentTab("All Users")}>All Users</a></Link>
                            <Link to="/"><a href="#" className="nav-item nav-link" onClick={() => logout()}>Logout</a></Link>
                            <Link to={"/profile/" + localStorage.getItem("emailAddress")}><a href="#" className="nav-item nav-link" style={currentTab == "My Profile" ? styling
                                : {}} onClick={() => setCurrentTab("My Profile")}>My Profile</a></Link>
                        </div>
                        <div>
                            <input placeholder="Name of category..." id="navigationInput" />
                            <Link to="/books"><button id="searchBtn"
                                onClick={() => props.searchByCategory({
                                    shouldSort: true,
                                    sortBy: document.querySelector("#navigationInput").value
                                })}
                            >Search</button></Link>
                        </div>
                    </div>
                </>
            }

        </nav >
    )
}

export default Navigation
