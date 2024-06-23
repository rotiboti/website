// LavalMenu.jsx
import React, {useEffect, useState} from 'react';
import CategoryMenu from "../category/CategoryMenu";
import {readJsonContent} from "../../../util/jsonContent";
import Sidebar from "../sidebar/Sidebar";
import './LavalMenu.css';
import {languageTranslate} from "../../../util/utils";

const lavalMenuJson = await readJsonContent("lavalMenu");

const LavalMenu = () => {
    const [menuData, setMenuData] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showScrollTopBack, setShowScrollTopBack] = useState(false);
    const headingMenu = "MEILLEURE CUISINE INDIENNE ET PAKISTANIE / BEST INDIAN & PAKISTANI CUISINE";


    useEffect(() => {
        setMenuData(lavalMenuJson);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.keys(menuData);
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const element = document.getElementById(section.replace(/\s+/g, '-').toLowerCase());
                if (element && window.scrollY >= element.offsetTop) {
                    setSelectedIndex(i);
                }
            }
            if (window.scrollY > 200) {
                setShowScrollTopBack(true);
            } else {
                setShowScrollTopBack(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menuData]);

    const handleTitleClick = (index) => {
        setSelectedIndex(index);
        const category = Object.keys(menuData)[index];
        const element = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="laval-menu-container">
            <Sidebar
                menuData={menuData}
                handleTitleClick={handleTitleClick}
                selectedIndex={selectedIndex}
            />
            <div className="laval-category-sections">
                <h1 className="home-menu-heading" > {languageTranslate(headingMenu)} </h1>
                {menuData && Object.keys(menuData).map((key, index) => (
                    <CategoryMenu key={index} title={key} isOpen={index===0} categoryData={menuData[key]}/>
                ))}
            </div>
            {showScrollTopBack && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    Top 👆
                </div>
            )}
        </div>
    );
}

export default LavalMenu;