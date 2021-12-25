import React, { useState, useEffect } from 'react'
import "../styles/Home.css";

function Home() {
    const [RecommendBookCount, setRecommendBookCount] = useState();
    const userEmail = localStorage.getItem("emailAddress");
    useEffect(() => {
        fetch("http://localhost:9000/api/book/" + userEmail)
            .then(response => response.json())
            .then(books => setRecommendBookCount(books.length))
            .catch(error => console.log(error));
    }, [])
    return (
        <div id="home" style={{ backgroundImage: "url(https://images.prismic.io/tpl-featured-content/add7e1b7-42f7-4a56-b337-0d7a4f50f0e1_TPL+Reading+Challenge_blogs+section+no+text.jpg?auto=compress,format&rect=0,0,630,320&w=800&h=406)" }}>
            <div>
                <h3>My recommended books count </h3>
                <h4>{RecommendBookCount}</h4>
            </div>

        </div>
    )
}

export default Home
