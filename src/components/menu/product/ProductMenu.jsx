// ProductMenu.jsx
import React from 'react';
import './ProductMenu.css';
import {languageTranslate} from "../../../util/utils";

const ProductMenu = ({productData}) => {
    return (
        <div className="product-menu-container">
            {productData?.is_new && <div className="product-new-banner">New</div>}
            {productData?.image_url && <img src={productData.image_url} alt={productData.title}/>}

            <div className={"product-details-wrapper"}>
                <p style={{flex: "1"}}>{languageTranslate(productData.title)}</p>
                {productData?.price && <p style={{color: "#909090"}}>${productData?.price}</p>}
            </div>

            <div className={"product-contents"}>
                {productData?.description && <p>{languageTranslate(productData?.description)}</p>}
                {productData?.contents && (
                    <ul>
                        {productData.contents.map((item, index) => (
                            <li key={index}>{languageTranslate(item)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ProductMenu;
