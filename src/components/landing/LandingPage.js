// LandingPage.js
import React from "react";
import './LandingPage.css';
import HomeNavbar from "../navbar/HomeNavbar";
import HomeMenu from "../menu/HomeMenu";
import HomeFooter from "../footer/HomeFooter";
import OrderPartner from "../order/OrderPartner";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../about/AboutUs";


const LandingPage = () => {

    return (
        <div className="LandingPage">
            <HomeNavbar/>
            <HomeMenu/>
            <OrderPartner/>
            <AboutUs/>
            <ContactUs/>
            <HomeFooter/>
        </div>
    )
};

export default LandingPage;
