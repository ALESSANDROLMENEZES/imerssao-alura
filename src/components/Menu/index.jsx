import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import './Menu.css';

export default props => (
    <header>
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="logo" />
            </Link>
            <Link className="ButtonLink" to="/cadastro/video">Novo vídeo</Link>
        </nav>
    </header>
);