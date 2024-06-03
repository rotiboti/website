// LandingPage.js
import React from "react";
import './LandingPage.css';
import HomeNavbar from "../navbar/HomeNavbar";
import HomeMenu from "../menu/HomeMenu";
import HomeFooter from "../footer/HomeFooter";


const LandingPage = () => {

    return (
        <div className="LandingPage">
            <HomeNavbar/>
            <HomeMenu/>
            <HomeFooter/>
        </div>
    )
};

export default LandingPage;
