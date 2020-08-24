import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavTruck from '../../assets/images/truck.svg';
import Wheel from '../../assets/images/zapasowka.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  a {
    text-transform: uppercase;
    color: white;
    position: relative;
    z-index: 1;
    padding: 20px 10px 20px 30px;

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      left: -0.3em;
      right: -350%;
      bottom: 0%;
      top: 0%;
      background-image: url(${NavTruck});
      transition: 0.3s ease-in;
      opacity: 0;
    }

    &::after {
      content: '';
      position: absolute;
      width: 23px;
      height: 21px;
      z-index: 0;
      right: 3px;
      bottom: 0%;
      background-image: url(${Wheel});
      background-repeat: no-repeat;
      transition: 0.1s ease-in;
      opacity: 0;
    }
  }

  a:hover::before {
    right: 0;
    z-index: -1;
    opacity: 1;
  }

  a:hover::after {
    right: 0;
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 30px;
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
    <Ul open={open}>
      <li>
        <Link to="/">Strona główna</Link>
      </li>
      <li>
        <Link to="/firma">Firma</Link>
      </li>
      <li>
        <Link to="/">Usługi</Link>
      </li>
      <li>
        <Link to="/">Trasy</Link>
      </li>
      <li>
        <Link to="/">Flota</Link>
      </li>
      <li>
        <Link to="/">Galeria</Link>
      </li>
      <li>
        <Link to="/">Kontakt</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
