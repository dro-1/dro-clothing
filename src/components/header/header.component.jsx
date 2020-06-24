import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from './../../firebase/firebase.utils';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import { selectCartVisibility } from './../../redux/cart/cart.selectors';

import CartIcon from './../cart-icon/cart-icon.component';
import CartDropdown from './../cart-dropdown/cart-dropdown.component';

import {ReactComponent as Logo} from './../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser,hidden }) =>(
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
      <CartIcon /> 
    </div>
    {
      !hidden
    ? <CartDropdown />
    : null
    }
    
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartVisibility
})

export default connect(mapStateToProps)(Header);