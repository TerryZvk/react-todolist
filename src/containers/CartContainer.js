import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/ShoppingCart/Cart';

class CartContainer extends Component {
  render() {
    const { cart, checkoutCart } = this.props;
    return (
      <div>
        <Cart
          cart={cart}
          total={totalPrice(cart)}
          onCheckoutClicked={checkoutCart}
        />
      </div>
    );
  }
}

const totalPrice = (cart) => {
  let productsPrice = 0;
  cart.forEach(element => {
    productsPrice += element.get('quantity') * element.get('price')
  });
  return productsPrice
}

const mapStateToProps = (state) => ({
  cart: state.get('cart')
})

const mapDispatchToProps = (dispatch) => ({
  checkoutCart: () => {

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);