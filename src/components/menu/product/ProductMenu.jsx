// ProductMenu.jsx
import React from 'react';
import './ProductMenu.css';
import {createImageUrl, languageTranslate} from "../../../util/utils";

const ProductMenu = ({productData}) => {
    return (
        <div className="product-menu-container">
            {productData?.is_new && <div className="product-new-banner">New</div>}

            {productData?.image_url && (<img src={createImageUrl(productData.image_url)} alt={productData.title}/>)}

            <div className={"product-details-container"}>
                <div className={"product-details-wrapper"}>
                    <p style={{flex: "1"}}>{languageTranslate(productData.title)}</p>
                    {productData?.price && <p className={"product-price-container"}>${productData?.price}</p>}
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
        </div>
    );
}

export default ProductMenu;
