import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from './../../firebase/firebase.utils';

import {ReactComponent as Logo} from './../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser }) =>(
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'> SHOP </Link>
      <a className='option'> CONTACT </a>
      {
        currentUser
        ? <a onClick={()=>auth.signOut()} className='option'>SIGN OUT</a>
        : <Link to='/signin' className='option'> SIGN IN </Link>
      } 
    </div>
  </header>
)

export default Header;