import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../components/ShoppingCart/ProductItem';

class ProductsListContainer extends Component {
  render() {
    const { products, addToCart} = this.props;
    return (
      <div>
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
  addToCart: () => {

  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductsListContainer);