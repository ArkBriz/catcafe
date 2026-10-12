import React from 'react';
import Header from '../../components/layout/header/header';
import Footer from '../../components/layout/footer/footer';
import MainPage from '../../components/pages/main-page/main-page';
import '../../components/layout/page-wrapper/style.css';

function PageWrapper() {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <MainPage />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;