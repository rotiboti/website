// ContactUs.jsx

import React from 'react';
import './ContactUs.css';
import {languageTranslate} from "../../util/utils";

const ContactUs = () => {
    const headingContact = "CONTACTEZ-NOUS / CONTACT US";

    return (
        <div className={"contact-us-main"}>
            <div className={"contact-us-wrapper"}>
                <h1 className="contact-us-heading"> {languageTranslate(headingContact)} </h1>
                <div className={"contact-us-details"}>
                    <p> Address:
                        <a href="https://www.google.com/maps/place/Roti+Boti+(Laval)/@45.5511976,-73.763437,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc923a36d603633:0xb5fd9f338f7187c6!8m2!3d45.5511939!4d-73.7585661!16s%2Fg%2F1hc1cd9sl?entry=ttu"
                        target="_blank"  rel="noreferrer"> 1631 Bd du Curé-Labelle, Laval, QC H7V 2W5</a>
                    </p>
                    <p>Phone: <a href="tel:+14506879998"> +1 (450) 687-9998</a></p>
                </div>
                <div className="map-container">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=%211m18%211m12%211m3%211d11175.827332850255%212d-73.75856609999998%213d45.55119390000001%212m3%211f0%212f0%213f0%213m2%211i1024%212i768%214f13.1%213m3%211m2%211s0x4cc923a36d603633%3A0xb5fd9f338f7187c6%212sRoti+Boti+%28Laval%29%215e0%213m2%211sen%212sca%214v1683845704674%215m2%211sen%212sca&z=16"
                        width="100%"
                        height="350"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;