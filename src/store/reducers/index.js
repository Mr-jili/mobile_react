import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
import goodscategory from './goodscategory'
import cart from './cart';
// 合并reducers
let reducer = combineReducers({
  cart,
  main,
  mySavour,
  goodscategory
});

export default reducer;