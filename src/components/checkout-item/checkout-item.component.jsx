import React from 'react';
import { connect } from 'react-redux';

import { removeItem, decreaseItemCount, addItem } from './../../redux/cart/cart.actions'

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem,decreaseItemCount, increaseItemCount }) => 
{
  const { name, imageUrl, price, quantity} = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span> 
      <span className='quantity'>
        <div onClick={()=>decreaseItemCount(cartItem)} className='arrow'>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={()=>increaseItemCount(cartItem)} className='arrow'>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div onClick={()=> removeItem(cartItem)} className='remove-button'>&#10005;</div>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  increaseItemCount: item => dispatch(addItem(item)),
  decreaseItemCount: item => dispatch(decreaseItemCount(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);