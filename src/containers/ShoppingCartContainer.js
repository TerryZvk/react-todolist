import React, { Component } from 'react';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer';

class ShoppingCartContainer extends Component {
  render() {
    return (
      <div>
        <ProductsListContainer />
        <CartContainer />
      </div>
    );
  }
}

export default ShoppingCartContainer;