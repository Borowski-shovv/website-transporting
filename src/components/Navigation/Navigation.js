import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../../assets/images/solidfach.svg';

const Navigation = () => {
  return (
    <>
      <header className="top-area" id="home">
        <div className="top-area-bg" data-stellar-background-ratio="0.6"></div>
        <div className="header-top-area">
          <div className="mainmenu-area" id="mainmenu-area">
            <div className="mainmenu-area-bg"></div>
            <nav className="navbar">
              <div className="container">
                <div className="navbar-header">
                  <a href="#home" className="navbar-brand">
                    <img src={Logo} alt="logo" />
                  </a>
                </div>
                <div id="main-nav" className="stellarnav">
                  <ul id="nav" className="nav navbar-nav">
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-1">Strona Główna</span>
                        <span className="label">
                          <i className="fa fa-plane"></i>Strona Główna
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/firma">
                        <span className="name logo-icon-2">Firma</span>
                        <span className="label">Firma</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-3">Usługi</span>
                        <span className="label">Usługi</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-4">Trasy</span>
                        <span className="label">Trasy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-4">Flota</span>
                        <span className="label">Flota</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-4">Galeria</span>
                        <span className="label">Galeria</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="name logo-icon-4">Kontakt</span>
                        <span className="label">Kontakt</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Link className="scroll-down-btn" to="/">
          <span></span>
        </Link>
      </header>
    </>
  );
};

export default Navigation;
