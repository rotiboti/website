// ProductMenu.jsx
import React from 'react';
import './ProductMenu.css';

const ProductMenu = ({productData}) => {
    return (
        <div className="product-menu-container">
            <img src={productData.image_url} alt={productData.title}/>
            <p>{productData.title}</p>
        </div>
    );
}

export default ProductMenu;
