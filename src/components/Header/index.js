import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./style.css"

export const Header = () => {
    const [scroll, setScroll] = useState(true)
    var header = document.getElementById("header");

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setScroll(false)
        } else {
            setScroll(true)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    return (
        <>
            <nav id="header" className={`header navbar navbar-expand-lg navbar-dark ${scroll ? "scroll" : ""}`}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <Link to="/" class="logo">
                        <img src="./images/cardomics.png" alt="cardomics" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/news">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/prediction">Prediction</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}
