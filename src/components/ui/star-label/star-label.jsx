import React from 'react';
import "./style.css";

export const CatFeature = {
    NEW: 'new',
    SOFT: 'soft'
};

function StarIcon({feature, className = ""}) {
    let options;

    switch (feature) {
        case CatFeature.NEW:
            options = {
                text: "New",
                bgColor: "#ffb334",
            };
            break;
        case CatFeature.SOFT:
            options = {
                text: "Ласковый",
                bgColor: "#7fc92e",
            };
            break;
        default:
            options = {
                text: "",
                bgColor: "#fff"
            };
            break;
    }

    return options.text ? (
        <span 
            className={`star-label ${className}`} 
            style={{backgroundColor: options.bgColor}}
        >
            {options.text}
        </span>
    ) : null;
}

export default StarIcon;