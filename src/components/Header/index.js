import React from 'react'
import "./style.css"

export const Header = () => {
    return (
        <header class="header">
            <a href="#default" class="logo">CompanyLogo</a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">New</a>
                <a href="#about">Predict</a>
            </div>
        </header>
    )
}
