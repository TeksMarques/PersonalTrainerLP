import React from 'react';
import './header.scss';
import { leticiaheader } from '../../assets';

function header() {
  return (
    <div className='header'>              
      <div className='header__container'>
        <h1>Apaixone-se por cuidar de você mesmo!</h1>     
      </div>
      <div className='header__container2'>
        <img src={ leticiaheader } alt="mulher treinando" width={655} />
      </div>
    </div>
  );
}

export default header;
