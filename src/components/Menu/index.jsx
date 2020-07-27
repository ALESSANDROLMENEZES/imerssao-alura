import React from 'react';
import Logo from '../../assets/img/logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

export default props => (
    <header>
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">Novo vídeo</ButtonLink>
        </nav>
    </header>
);