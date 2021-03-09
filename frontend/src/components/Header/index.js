import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Profile from '../../assets/img/perfil.png';

import "./style.css";

function Header() {
    
    let location = useLocation();
    let path = location.pathname;

    return (
        <header>
            <section className="header d-flex justify-content-center align-items-center">
                <div>
                    <img src={Profile} alt="Jose Alisson" className="profile-img" />

                    <div className="description-profile">
                        <h1>José Alisson Bezerra</h1>
                        <p>Portfólio</p>
                    </div>
                </div>
            </section>

            <section className="navigation nav-shadow bg-white">

                <nav className="navbar-expand-lg navbar-light bg-white">
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className={path === "/sobre" ? "active nav-item" : "nav-item"}>
                                <NavLink className="nav-link p-3" to="/sobre">SOBRE</NavLink>
                            </li>
                            <li className={path === "/" ? "active nav-item" : "nav-item"}>
                                <NavLink className="nav-link p-3" to="/" exact>PORTFÓLIO</NavLink>
                            </li>
                            <li className={path === "/contato" ? "active nav-item" : "nav-item"}>
                                <NavLink className="nav-link p-3" to="/contato">CONTATO</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </section>
        </header>


    );
}

export default Header;
