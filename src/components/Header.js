import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                < a href="/">
                    < img src="https://uploaddeimagens.com.br/images/002/851/841/original/logo--morecodes.png?1598498792" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}