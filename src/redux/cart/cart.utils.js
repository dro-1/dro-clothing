export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )
  if(existingCartItem){
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
}

export const decreaseItemCount = (cartItems, cartItemToDecrease) => {
  if(cartItemToDecrease.quantity > 1){
    return cartItems.map( cartItem => {
      if(cartItem.id === cartItemToDecrease.id){
        return {...cartItemToDecrease, quantity: cartItemToDecrease.quantity-1}
      }
      return cartItem
    })
  }
  return cartItems
}