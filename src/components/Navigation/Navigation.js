import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../../assets/images/solidfach.svg';
import Hamburger from './Hamburger';

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
                <Hamburger />
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
