import { combineReducers } from 'redux-immutable';
import { reducer as TodoListReducer } from '../components/TodoList/store';
import { productsReducer } from '../components/ShoppingCart/store'

export　default combineReducers({
  todolist: TodoListReducer,
  products: productsReducer
})