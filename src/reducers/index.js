import { combineReducers } from 'redux-immutable';
import { reducer as TodoListReducer } from '../components/TodoList/store';
import { productsReducer, cartReducer } from '../components/ShoppingCart/store';
import tagsTaxonomyReducer from '../components/TagsTaxonomy/store/reducer';

export　default combineReducers({
  todolist: TodoListReducer,
  products: productsReducer,
  cart: cartReducer,
  tagsTreeData: tagsTaxonomyReducer
})