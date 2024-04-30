// CategoryMenu.jsx
import React from 'react';
import './CategoryMenu.css';
import ProductMenu from "../product/ProductMenu";

const CategoryMenu = ({ title, categoryData }) => {
    return (
        <div className="category-menu-container">
            <h1>{title}</h1>
            <div className="category-menu-grid">
                {categoryData.map((product, index) => (
                    <ProductMenu key={index} productData={product}/>
                ))}
            </div>
        </div>
    );
}

export default CategoryMenu;
