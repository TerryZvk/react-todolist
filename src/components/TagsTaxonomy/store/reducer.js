import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS([
  {
    "value": "浙江",
    "checked": false,
    "children": [
      {
        "value": "杭州",
        "checked": false,
        "children": [{"value": "西湖",  "checked": false},{"value": "断桥",  "checked": false}]
      },
      {
        "value": "苏州",
        "checked": false,
        "children": [{"value": "乌镇",  "checked": false}]
      }
    ]
  },
  {
    "value": "四川",
    "checked": false,
    "children": [
      {
        "value": "成都",
        "checked": false,
        "children": [{"value": "锦里",  "checked": false},{"value": "方所",  "checked": false}]
      },
      {
        "value": "阿坝",
        "checked": false,
        "children": [{"value": "九寨沟",  "checked": false}]
      }
    ]
  }
])

const findValue = (state, action) => {
  state.forEach((item) => {
     if(item.get('value') === action.value){
       item.set('checked', action.status)
     }
  })
  return state
}

export default (state=defaultState, action) => {
  switch(action.type){
    case constants.CLICK_CHECKOUT_BOX:
      return findValue(state, action)
    default:  
      return state
  }
}