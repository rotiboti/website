// LandingPage.js
import React from "react";
import './LandingPage.css';
import HomeNavbar from "../navbar/HomeNavbar";
import LavalMenu from "../menu/LavalMenu";


const LandingPage = () => {

    return (
        <div className="LandingPage">
            <HomeNavbar/>
            <LavalMenu/>
        </div>
    )
};

export default LandingPage;
