import React from 'react'

function Navigation2() {
    return (
        <nav className="navbar navbar-expand-lg" id="Navigation">
            <a className="navbar-brand" href="#">Recommend</a>
            {/* change this */}
            {true &&
                // only when the user logs in that we want to display the rest of the navigation
                <>

                    <span className="navbar-toggler-icon" style={{ color: "white" }}>
                        <i class="fas fa-bars"></i>
                    </span>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a>Home</a>
                            <a>Home</a>
                            <a>Home</a>
                            <a>Home</a>
                            <a>Home</a>
                            {/* <Link to="/"><a href="#" className="nav-item nav-link" style={currentTab == "Home" ? styling
                                : {}} onClick={() => setCurrentTab("Home")}>Home</a></Link>
                            <Link to="/books"><a href="#" className="nav-item nav-link" style={currentTab == "All Books" ? styling
                                : {}} onClick={() => allBookPage()}>All Books</a></Link>
                            <Link to="/addBook"><a href="#" className="nav-item nav-link" style={currentTab == "Add Book" ? styling
                                : {}} onClick={() => setCurrentTab("Add Book")}>Add Book</a></Link>
                            <Link to="/allUsers"><a href="#" className="nav-item nav-link" style={currentTab == "All Users" ? styling
                                : {}} onClick={() => setCurrentTab("All Users")}>All Users</a></Link>
                            <Link to="/"><a href="#" className="nav-item nav-link" onClick={() => logout()}>Logout</a></Link>
                            <Link to={"/profile/" + localStorage.getItem("emailAddress")}><a href="#" className="nav-item nav-link" style={currentTab == "My Profile" ? styling
                                : {}} onClick={() => setCurrentTab("My Profile")}>My Profile</a></Link> */}
                        </div>
                        <div>
                            <input placeholder="Name of category..." id="navigationInput" />
                            {/* <Link to="/books"><button id="searchBtn"
                                onClick={() => props.searchByCategory({
                                    shouldSort: true,
                                    sortBy: document.querySelector("#navigationInput").value
                                })}
                            >Search</button></Link> */}
                            <button>Search</button>
                        </div>
                    </div>
                </>
            }

        </nav >
    )
}

export default Navigation2
