import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';
import './style.css';

function PageWrapper(props) {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <MainPage {...props} />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;