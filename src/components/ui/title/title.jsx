import React from 'react';
import './style.css';

export const TitleSize = {
    SMALL: 'small',
    BIG: 'big',
}

function Title({children, size, as = 'h1'}) {
    const Tag = as;

    return (
        <Tag className={`title${size ? ` title_${size}` : ''}`}>{children}</Tag>
    );
}

export default Title;