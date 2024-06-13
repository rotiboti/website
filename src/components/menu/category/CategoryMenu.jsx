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
                (
                    <p style={{fontWeight: "bold" }}>{languageTranslate(categoryData?.description)}</p>
                )
            }
            {categoryData?.details &&
                (
                    <>
                        <h3 className="menu-details-headings">{languageTranslate(categoryData?.details?.description)}</h3>
                        <div className="category-details-grid">
                            {categoryData?.details?.choices.map((product, index) => (
                                <ProductMenu key={index} productData={product}/>
                            ))}
                        </div>
                        <h3 className="menu-details-headings">{languageTranslate(categoryData?.details?.preparation)}</h3>
                    </>
                )
            }

            {categoryData?.products &&
                (
                    <div className="category-menu-grid">
                        {categoryData?.products.map((product, index) => (
                            <ProductMenu key={index} productData={product}/>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default CategoryMenu;
