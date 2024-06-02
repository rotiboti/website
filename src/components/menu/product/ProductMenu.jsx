// ProductMenu.jsx
import React from 'react';
import './ProductMenu.css';

const ProductMenu = ({productData}) => {
    return (
        <div className="product-menu-container">
            {productData?.is_new && <div className="product-new-banner">New</div>}
            <img src={productData.image_url} alt={productData.title}/>

            <div className={"product-details-wrapper"}>
                <p style={{flex: "1"}}>{productData.title}</p>
                {productData?.price && <p style={{color: "#909090"}}>{productData?.price}</p>}
            </div>
        </div>
    );
}

export default ProductMenu;
