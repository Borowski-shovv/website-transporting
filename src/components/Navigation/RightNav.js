import React, {useRef} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  li {
    position: relative;
  }

  a {
    text-transform: uppercase;
    color: white;    
    z-index: 1;
    padding: 20px 10px 20px 30px;
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

const RightNav = ({ open }) => {
 
  return (
    <>
    <Ul className="btn-10" open={open}>
    <li>
      <NavLink exact 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/"><span>Strona główna</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/firma"><span>Firma</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/oferta"><span>Oferta</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/cennik"><span>Cennik</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/galeria"><span>Galeria</span></NavLink>
    </li>
    <li>
      <NavLink 
      activeClassName="navigationItemLinkActive"
      className="navigationItemLink" to="/kontakt"><span>Kontakt</span></NavLink>
    </li>
  </Ul>
  </>
  );
};

export default RightNav;
