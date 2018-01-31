import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
import goodscategory from './goodscategory'
import cart from './cart';
import register from "./register";
import login from "./login";
// 合并reducers
let reducer = combineReducers({
  cart,
  main,
  mySavour,
  register,
  login,
  goodscategory
});

export default reducer;