import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour';
import register from "./register";
import login from "./login";

// 合并reducers
let reducer = combineReducers({
  main, mySavour,register,login
});

export default reducer;