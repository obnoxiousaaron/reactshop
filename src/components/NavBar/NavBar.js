import React from 'react';
import "./Nav.css"

const NavBar = ({onSearch}) => (
    <nav>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaxiHxdP6tlNsdItR6Ed3y8K9X1I6zfv1y1g&usqp=CAU" alt="logo"></img>
            <h1>Store & Co.</h1>
        </div>
        <div className="navRight">
            <SearchBar />
        </div>
    </nav>
);

export default NavBar;