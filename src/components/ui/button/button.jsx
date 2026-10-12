import React from 'react';
import '../../components/ui/button/style.css';

function Button() {
    return (
        <button type="button" className="button">
            {children}
        </button>
    );
}

export default Button;