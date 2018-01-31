import {combineReducers} from 'redux';
import main from './main';
import cart from './cart';
// 合并reducers
let reducer = combineReducers({main, cart});

export default reducer;