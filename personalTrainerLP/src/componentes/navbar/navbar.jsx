import React from 'react';
import './navbar.scss';

function navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41ywOQuTODdNJwr792GE9rR364kveeul6-Q&usqp=CAU'
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
