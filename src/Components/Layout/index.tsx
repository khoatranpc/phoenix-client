import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './style.scss';

const Layout = () => {
    return (
        <div className="page">
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout