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
                <NavLink to="user/:userId" className="navlink">Profil</NavLink>
                <NavLink to="/settings" className="navlink">Réglage</NavLink>
                <NavLink to="/community" className="navlink">Community</NavLink>
                <NavLink to="/*" className="navlink">Utilisateurs</NavLink>
            </nav>
        </header>
    );
};

export default Header;