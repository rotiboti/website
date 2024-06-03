// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({menuData, handleTitleClick, selectedIndex}) => {
    return (
        <div className="sidebar">
            <h3>OUR MENU</h3>
            {menuData && Object.keys(menuData).map((key, index) => (
                <div
                    key={index}
                    className={`sidebar-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => handleTitleClick(index)}
                >
                    {key}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
