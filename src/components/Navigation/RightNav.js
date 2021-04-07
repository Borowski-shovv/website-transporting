import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AuthOptions from '../../auth/AuthOptions';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  li {
    position: relative;
    padding: 10px;
  }

  a {
    text-transform: uppercase;
    color: white;    
    z-index: 1;
  
    transition: all 0.3s ease-out 0s;
  }

  a:hover::before {
    right: 0;
    opacity: 1;
  }

  a:hover::after {
    right: 0;
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 20px 10px 20px 30px;
    margin-top: 0;
    flex-flow: column nowrap;
    background-color: #24292e;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 50px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }

    a::before,
    a::after {
      display: none;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
 
  return (
    <>
    <Ul open={open}>
    <li>
      <NavLink exact 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" 
      to="/"
      onClick={(open) => setOpen(!open)}
      ><span>Start</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" 
      to="/oferta"
      onClick={() => setOpen(!open)}
      ><span>Oferta</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" 
      to="/wycena"
      onClick={() => setOpen(!open)}
      ><span>Wyceń przesyłkę</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" 
      to="/kontakt"
      onClick={() => setOpen(!open)}
      ><span>Kontakt</span></NavLink>
    </li>
    <AuthOptions open={open} setOpen={(open) => setOpen(open)}/>
  </Ul>
  </>
  );
};

export default RightNav;
