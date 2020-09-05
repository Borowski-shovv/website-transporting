import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
    background-color: #bf1e2e;
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
    <Ul className="btn-10" open={open}>
      <li>
        <Link to="/"><span>Strona główna</span></Link>
      </li>
      <li>
        <Link to="/firma"><span>Firma</span></Link>
      </li>
      <li>
        <Link to="/oferta"><span>Oferta</span></Link>
      </li>
      <li>
        <Link to="/cennik"><span>Cennik</span></Link>
      </li>
      <li>
        <Link to="/galeria"><span>Galeria</span></Link>
      </li>
      <li>
        <Link to="/kontakt"><span>Kontakt</span></Link>
      </li>
    </Ul>
  );
};

export default RightNav;
