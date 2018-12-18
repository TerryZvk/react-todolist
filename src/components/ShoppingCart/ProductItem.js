import React from 'react';
import Product from './Product';
import { Button } from 'antd';

const ProductItem = ({product, onAddToCartClicked}) => (
  <div>
    <Product 
      title={product.get('title')}
      price={product.get('price')}
      num={product.get('inventory')}
    />
    <Button
      onClick={onAddToCartClicked}
      disabled={product.get('inventory') > 0 ? '' : 'disabled'}
      >
      {product.get('inventory') > 0 ? 'Add to cart' : 'Sold Out!'}
    </Button>  
  </div>
)

export default ProductItem