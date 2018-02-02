import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
import goodscategory from './goodscategory'
import cart from './cart';
import register from "./register";
import login from "./login";
import detail from "./detail";
import search from "./search";
import pay from './pay'
// 合并reducers
let reducer = combineReducers({
  cart,
  main,
  mySavour,
  register,
  login,
  goodscategory,
  detail,
  search,
  pay
});

export default reducer;