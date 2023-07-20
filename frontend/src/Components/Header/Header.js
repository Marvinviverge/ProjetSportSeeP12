import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';
import Logo from '@/Assets/images/Logo-SportSee.png';

const Header = () => {
    return (
        <header>
            <NavLink to="/home">
                <img src={Logo} alt="Logo" />
            </NavLink>
            <nav>
                <NavLink to="/home" className="navlink">Accueil</NavLink>
                <NavLink to="/profil/:id" className="navlink">Profil</NavLink>
                <NavLink to="/settings" className="navlink">Réglage</NavLink>
                <NavLink to="/community" className="navlink">Community</NavLink>
            </nav>
        </header>
    );
};

export default Header;