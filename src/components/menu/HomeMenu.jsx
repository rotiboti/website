// CategoryMenu.jsx
import React from 'react';
import './HomeMenu.css';
import LavalMenu from "./laval/LavalMenu";

const HomeMenu = () => {
    return (
        <div className="home-menu-container">
            <div className="home-menu-wrapper">
                <LavalMenu/>
            </div>
        </div>
    );
}

export default HomeMenu;
