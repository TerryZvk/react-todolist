import { combineReducers } from 'redux-immutable';
import { TodoListReducer } from '../components/TodoList/store/reducer'

export　default combineReducers({
  todolist: TodoListReducer
})