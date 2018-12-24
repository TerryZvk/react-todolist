import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct';

const Cart = ({cart, total, onCheckoutClicked}) => {
  const hasProducts = cart.some(item => parseInt(item.get('quantity')) > 0);
  const nodes = hasProducts ? (
    cart.map( product => 
      <CartProduct
        title={product.get('title')}
        price={product.get('price')}
        num={product.get('quantity')}
        key={product.get('id')}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h2> Your Cart</h2>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number
}

export default Cart