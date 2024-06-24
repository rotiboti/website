// HomeFooter.jsx

import React, {useState} from 'react';
import './HomeFooter.css';
import {getSelectedLanguage, setSelectedLanguage} from "../../util/utils";

const HomeFooter = () => {
    const [language, setLanguage] = useState(getSelectedLanguage());

    const handleLanguageChange = (newLanguage) => {
        setSelectedLanguage(newLanguage);
        setLanguage(newLanguage);
        window.location.reload();
    };

    return (
        <div className="home-footer-container">
            <div className="laval-footer-wrapper">
                <h2>HALAL DESI RESTAURANT - ROTI BOTI</h2>
                <div className="laval-footer-language">
                    <button
                        className={language === 'en' ? 'selected' : ''}
                        onClick={() => handleLanguageChange('en')}
                    >offered in English</button>
                    <button
                        className={language === 'fr' ? 'selected' : ''}
                        onClick={() => handleLanguageChange('fr')}
                    >offert en Français</button>
                </div>
                <p>Copyright © 2024</p>
            </div>
        </div>
    );
}

export default HomeFooter;