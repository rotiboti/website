// CategoryMenu.jsx
import React from 'react';
import './CategoryMenu.css';
import ProductMenu from "../product/ProductMenu";
import {languageTranslate} from "../../../util/utils";

const CategoryMenu = ({title, categoryData}) => {
    return (
        <div className="category-menu-container" id={title.replace(/\s+/g, '-').toLowerCase()}>
            <h2 className="category-menu-heading">{languageTranslate(title)}</h2>
            {categoryData?.description &&
                <p style={{fontWeight: "bold"}}>{languageTranslate(categoryData?.description)}</p>}

            <div className="category-menu-grid">
                {categoryData?.products.map((product, index) => (
                    <ProductMenu key={index} productData={product}/>
                ))}
            </div>
        </div>
    );
}

export default CategoryMenu;
