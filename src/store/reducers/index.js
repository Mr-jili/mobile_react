import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
import goodscategory from './goodscategory'
import cart from './cart';
import register from "./register";
import login from "./login";
<<<<<<< HEAD
import detail from "./detail/detail";
import evaluate from "./detail/evaluate";
import isDetail from './detail/isDetailLogin'
=======
import detail from "./detail";
import search from "./search";
>>>>>>> 16ab9603317c836afcf274a426522c1f7b898ff1
// 合并reducers
let reducer = combineReducers({
  cart,
  main,
  mySavour,
  register,
  login,
  goodscategory,
  detail,
<<<<<<< HEAD
  evaluate,
  isDetail
=======
  search
>>>>>>> 16ab9603317c836afcf274a426522c1f7b898ff1
});

export default reducer;