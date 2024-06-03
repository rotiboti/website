// CategoryMenu.jsx
import React from 'react';
import './CategoryMenu.css';
import ProductMenu from "../product/ProductMenu";

const CategoryMenu = ({title, categoryData}) => {
    return (
        <div className="category-menu-container" id={title.replace(/\s+/g, '-').toLowerCase()}>
            <h2 className="category-menu-heading">{title}</h2>
            <div className="category-menu-grid">
                {categoryData.map((product, index) => (
                    <ProductMenu key={index} productData={product}/>
                ))}
            </div>
        </div>
    );
}

export default CategoryMenu;
