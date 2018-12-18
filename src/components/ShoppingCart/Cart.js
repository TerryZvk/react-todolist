import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Cart = ({cart, total, onCheckoutClicked}) => {
  const hasProducts = cart.size > 0;
  const nodes = hasProducts ? (
    cart.map( product => 
      <Product
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
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default Cart