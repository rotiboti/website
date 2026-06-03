// CategoryMenu.jsx
import React from 'react';
import './HomeMenu.css';
import LavalMenu from "./laval/LavalMenu";
import MenuEndOrderCTA from "../order/MenuEndOrderCTA";

const HomeMenu = () => {
    return (
        <div className="home-menu-container">
            <div className="home-menu-wrapper">
                <LavalMenu/>
                <MenuEndOrderCTA/>
            </div>
        </div>
    );
}

export default HomeMenu;
