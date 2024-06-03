// HomeNavbar.jsx

import React from 'react';
import getImageUrl from "../../util/utils";
import './HomeNavbar.css';

const HomeNavbar = () => {
    const halalImageUrl = getImageUrl('halal');
    const logo512ImageUrl = getImageUrl('logo512');

    return (
        <div className="home-navbar-container">
            <div className="laval-navbar-wrapper">
                <div className="laval-navbar-logo">
                    <img src={logo512ImageUrl} width="75px" height="75px" alt="Halal"/>
                    <h1>ROTI BOTI</h1>
                </div>
                <img src={halalImageUrl} width="50px" height="50px" alt="Halal"/>
            </div>
        </div>
    );
}

export default HomeNavbar;