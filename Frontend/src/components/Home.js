import React, { useState, useEffect } from 'react'
import "../styles/Home.css";

function Home() {
    const [RecommendBookCount, setRecommendBookCount] = useState();
    const userEmail = localStorage.getItem("emailAddress");
    useEffect(() => {
        fetch("http://localhost:9000/api/book/" + userEmail)
            .then(response => response.json())
            .then(books => setRecommendBookCount(books.length))
    }, [])
    return (
        <div id="home"
            style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://us.123rf.com/450wm/perhapzzz/perhapzzz1603/perhapzzz160300384/53680862-open-book-hardback-books-on-wooden-table-back-to-school-copy-space-for-text-.jpg?ver=6)" }}
        >
            <div>
                <h3>My recommended books count </h3>
                <h4>{RecommendBookCount}</h4>
            </div>

        </div>
    )
}

export default Home
