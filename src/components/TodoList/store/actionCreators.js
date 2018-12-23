import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './constants';
import { fromJS } from 'immutable';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: fromJS(value)
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index: fromJS(index)
})