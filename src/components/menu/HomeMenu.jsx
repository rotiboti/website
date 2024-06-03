// CategoryMenu.jsx
import React from 'react';
import './HomeMenu.css';
import LavalMenu from "./laval/LavalMenu";

const HomeMenu = () => {
    return (
        <div className="home-menu-container">
            <h1 className="home-menu-heading">OUR MENU
                <div className="heading-underline"></div>
            </h1>
            <div className="home-menu-wrapper">
                <LavalMenu/>
            </div>
        </div>
    );
}

export default HomeMenu;
