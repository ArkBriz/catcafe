import React from 'react';
import Logo from '../../components/logo/logo';
import '../../components/layout/footer/style.css';

function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <span className="footer__copyright">Создано 2021</span>
        </footer>
    );
}

export default Footer;