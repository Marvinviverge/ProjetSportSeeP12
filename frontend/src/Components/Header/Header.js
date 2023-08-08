import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';
import Logo from '@/Assets/images/Logo-SportSee.png';

const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Logo" />
                <NavLink to="/home" className="navlink">Accueil</NavLink>
                <NavLink to="#" className="navlink">Profil</NavLink>
                <NavLink to="#" className="navlink">Réglage</NavLink>
                <NavLink to="#" className="navlink">Community</NavLink>
            </nav>
        </header>
    );
};

export default Header;