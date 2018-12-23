import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  inputValue: '',
  list: []
});

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_INPUT_VALUE:
      return state.set('inputValue', action.value);
    case ADD_TODO_ITEM:
      if(state.get('inputValue') === ''){
        return state
      }else{
        return state.merge({
          'list': state.get('list').push(state.get('inputValue')),
          'inputValue': ""
        })
      }
    case DELETE_TODO_ITEM:
      return state.set('list', state.get('list').filter((i, idx) => idx!== action.index))  
    default:
      return state  
  }
};