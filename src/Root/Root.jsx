import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../SharedPage/Navber';
import Footer from '../SharedPage/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;