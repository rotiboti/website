// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({menuData, handleTitleClick, selectedIndex}) => {

    const menuHeading = "NOTRE CARTE / OUR MENU";

    return (
        <div className="sidebar">
            <h3>{menuHeading.split('/')[0]}</h3>
            {menuData && Object.keys(menuData).map((key, index) => (
                <div
                    key={index}
                    className={`sidebar-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleTitleClick(index)}
                >
                    {key.split('/')[0]}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
