import {combineReducers} from 'redux';
import main from './main';
import mySavour from './savour'
// 合并reducers
let reducer = combineReducers({
    main,mySavour
});

export default reducer;