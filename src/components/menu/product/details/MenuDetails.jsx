// MenuDetails.jsx
import React from 'react';
import './MenuDetails.css';
import {languageTranslate} from "../../../../util/utils";

const MenuDetails = ({detailsData}) => {
    return (
        <div className="details-menu-container">
            {detailsData?.is_new && <div className="details-new-banner">New</div>}
            {detailsData?.image_url && <img src={detailsData.image_url} alt={detailsData.title}/>}

            <div className={"details-details-wrapper"}>
                <p style={{flex: "1"}}>{languageTranslate(detailsData.title)}</p>
                {detailsData?.price && <p style={{color: "#909090"}}>${detailsData?.price}</p>}
            </div>

            <div className={"details-contents"}>
                {detailsData?.description && <p>{languageTranslate(detailsData?.description)}</p>}
                {detailsData?.contents && (
                    <ul>
                        {detailsData.contents.map((item, index) => (
                            <li key={index}>{languageTranslate(item)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default MenuDetails;
