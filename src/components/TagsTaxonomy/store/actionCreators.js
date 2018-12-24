import * as constants from './constants';
import { fromJS } from 'immutable';

export const clickCheackedBox = (value, status) => ({
  type: constants.CLICK_CHECKOUT_BOX,
  value: fromJS(value),
  status: fromJS(status)
})