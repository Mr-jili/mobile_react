import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
import goodscategory from './goodscategory'
// 合并reducers
let reducer = combineReducers({
  main,
  mySavour,
  goodscategory
});

export default reducer;