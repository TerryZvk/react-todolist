import { fromJS } from 'immutable';
// import * as types from './constants';

const defaultState = fromJS([
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
])

const productsReducer = (state = defaultState, action) => {
  switch(action.type){
    default:
      return state  
  }
};

export default productsReducer