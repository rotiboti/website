// LandingPage.js
import React from "react";
import './LandingPage.css';
import HomeNavbar from "../navbar/HomeNavbar";
import HomeMenu from "../menu/HomeMenu";


const LandingPage = () => {

    return (
        <div className="LandingPage">
            <HomeNavbar/>
            <HomeMenu/>
        </div>
    )
};

export default LandingPage;
