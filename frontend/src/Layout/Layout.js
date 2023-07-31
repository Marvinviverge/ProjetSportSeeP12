import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@/Components/Header/Header.js';
import Leftbar from '@/Components/Leftbar/Leftbar.js'

import './Layout.css';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Leftbar />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;