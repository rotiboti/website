// CategoryMenu.jsx
import React, {useState} from 'react';
import './CategoryMenu.css';
import ProductMenu from "../product/ProductMenu";
import {languageTranslate} from "../../../util/utils";

const CategoryMenu = ({title, isOpen = false, categoryData}) => {

    const [open, setOpen] = useState(isOpen);

    const isOpenToggleFunction = () => {
        console.assert(!open);
        setOpen(!open);
    };

    return (
        <div className="category-menu-container" id={title.replace(/\s+/g, '-').toLowerCase()}>

            <div className={"category-menu-click"} onClick={isOpenToggleFunction}>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24"
                     className={open ? 'rotate180' : ''}>
                    <path fill="#747878" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                </svg>
                <h2 className="category-menu-heading">{languageTranslate(title)}</h2>
            </div>

            {open && (
                <>
                    {categoryData?.description &&
                        (
                            <p style={{fontWeight: "bold"}}>{languageTranslate(categoryData?.description)}</p>
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
                </>
            )
            }
        </div>
    );
}

export default CategoryMenu;
