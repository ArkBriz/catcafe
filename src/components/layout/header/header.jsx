import React from 'react';
import Logo from '../../components/logo/logo';
import Nav from '../../components/layout/nav/nav';
import '../../components/layout/header/style.css';

function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
}

export default Header;