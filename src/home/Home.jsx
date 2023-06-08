import React from "react";
import './Home.css'
import photo from '../assets/dance.png'
function Home() {
    return (
        <>
            <div id="navbar">
                <div id="top">
                <p id='hello'>Hello I am</p>
                <h1>Miracksubba</h1>
                <h5 id='ui'>UI/Ux & projecrt head</h5>
                <p>Biographies are how we learn information about another human being’s life. Whether you want to start writing a biography about a famous person, historical figure, or an influential family member, it’s important to know all the elements that make a biography worth both writing and reading.</p>

                <div id="button">
                    <button id='b'>Hire Me</button>
                    <button id='a'>Download CV</button>
                </div>

                </div>
                <img src={photo} alt="" />
            </div>
        </>
    )
} export default Home