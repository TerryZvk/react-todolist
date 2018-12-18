import * as types from './constants';

export const addToCart = (productId) => ({
  type: types.ADD_TO_CART,
  productId
})
