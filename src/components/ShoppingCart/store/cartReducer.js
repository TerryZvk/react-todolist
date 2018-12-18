import { fromJS } from 'immutable';
import * as types from './constants';

const defaultState = fromJS([
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "quantity": 0},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "quantity": 0},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "quantity": 0}
])

const cartReducer = (state = defaultState, action) => {
  switch(action.type){
    case types.ADD_TO_CART:
      const { productId } = action
      return state.setIn([productId-1, 'quantity'], state.getIn([productId-1, 'quantity'])+1)
    default:
      return state  
  }
};

export default cartReducer