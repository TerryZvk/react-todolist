import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ShoppingCart/ProductItem';
import { actions } from '../components/ShoppingCart/store';

class ProductsListContainer extends Component {
  render() {
    const { products, addToCart} = this.props;
    return (
      <div>
        <h2>Products List:</h2>
        {
          products.map( product =>
          <ProductItem
            key={product.get('id')}
            product={product}
            onAddToCartClicked={() => addToCart(product.get('id'))}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.get('products')
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => {
    const action = actions.addToCart(id);
    dispatch(action);
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductsListContainer);