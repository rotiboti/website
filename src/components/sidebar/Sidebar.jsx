// Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ menuData, handleTitleClick }) => {
    return (
        <div className="sidebar">
            <h3>Offerings</h3>
            {menuData && Object.keys(menuData).map((key, index) => (
                <div key={index} className="sidebar-item" onClick={() => handleTitleClick(key)}>
                    {key}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
