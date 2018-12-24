import React from 'react';
import PropTypes from 'prop-types';

const CartProduct = ({price, num, title}) => {
  return num > 0 ? ( 
    <div>
      {title} - &#36;{price}{num ? `x ${num}` : null}
    </div>) : null
}
  
CartProduct.propTypes = {
  price: PropTypes.number,
  num: PropTypes.number,
  title: PropTypes.string
}

export default CartProduct