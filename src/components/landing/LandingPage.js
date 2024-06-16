// LandingPage.js
import React from "react";
import './LandingPage.css';
import HomeNavbar from "../navbar/HomeNavbar";
import HomeMenu from "../menu/HomeMenu";
import HomeFooter from "../footer/HomeFooter";
import OrderPartner from "../order/OrderPartner";
import ContactUs from "../contact/ContactUs";


const LandingPage = () => {

    return (
        <div className="LandingPage">
            <HomeNavbar/>
            <HomeMenu/>
            <OrderPartner/>
            <ContactUs/>
            <HomeFooter/>
        </div>
    )
};

export default LandingPage;
