// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import {languageTranslate} from "../../../util/utils";

const Sidebar = ({menuData, handleTitleClick, selectedIndex}) => {

    const menuHeading = "NOTRE CARTE / OUR MENU";

    return (
        <div className="sidebar">
            <h3>{languageTranslate(menuHeading)}</h3>
            {menuData && Object.keys(menuData).map((key, index) => (
                <div
                    key={index}
                    className={`sidebar-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleTitleClick(index)}
                >
                    {languageTranslate(key)}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
