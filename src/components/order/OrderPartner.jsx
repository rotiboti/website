// OrderPartner.jsx

import React from 'react';
import './OrderPartner.css';
import getImageUrl, {languageTranslate} from "../../util/utils";

const OrderPartner = () => {
    const skipImageUrl = getImageUrl('skip');
    const uberImageUrl = getImageUrl('uber');
    const doordashImageUrl = getImageUrl('doordash');
    const headingPartner = "COMMANDER EN LIGNE / ORDER ONLINE";


    return (
        <div className={"order-partner-main"}>
            <div className={"order-partner-wrapper"}>
                <h1 className="order-partner-heading"> {languageTranslate(headingPartner)} </h1>
                <ul className="order-list">
                    <li id="skip">
                        <a href="https://www.skipthedishes.com/roti-boti" target="_blank" rel="noreferrer">
                            <img width="300px" height="300px" src={skipImageUrl} alt="Skip the Dishes"/>
                        </a>
                    </li>
                    <li id="uber">
                        <a href="https://www.ubereats.com/ca/store/roti-boti/kj6fr0JVTRiqP1ulmv6x6w?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"  target="_blank" rel="noreferrer">
                            <img width="150px" height="150px" src={uberImageUrl} alt="Uber Eats"/>
                        </a>
                    </li>
                    <li id="doordash">
                        <a href="https://www.doordash.com/fr-CA/business/roti-boti-restaurant-86356/menu/" target="_blank" rel="noreferrer">
                            <img width="300px" height="300px" src={doordashImageUrl} alt="DoorDash"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default OrderPartner;