import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from './../../assets/crown.svg';

import './header.style.scss';

const Header = () =>(
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'> SHOP </Link>
      <Link className='option'> ABOUT </Link>
    </div>
  </header>
)

export default Header;