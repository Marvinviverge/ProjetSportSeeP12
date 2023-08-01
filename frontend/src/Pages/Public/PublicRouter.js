import { React } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Settings, Profil, Community, Error } from '@/Pages/Public/index.js'

import Layout from '@/Layout/Layout.js';

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>

                <Route path="" element={<Navigate to="/home" />} />

                <Route path="/home" element={<Home />} />
                <Route path="user/:userId" element={<Profil />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/community" element={<Community />} />

                <Route path="*" element={<Error />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;