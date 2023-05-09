import React from 'react';
import './navbar.scss';
import { logo } from '../../assets/index';

function navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <img
            src={logo}
            alt='logo'
          />
        </div>
        <div className='navbar__menu'>
          <ul>
            <h2>SOBRE</h2>
            <h2>SERVIÇOS</h2>
            <h2>CONTATO</h2>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
