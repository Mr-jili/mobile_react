import * as Types from '../action-types'
let initSavour={
    list:{},
    offset:0,
    limit:8
};
export let getSavour=(state=initSavour,action)=>{
    if(action.type===Types.SET_SAVOUR){
        return {...state,...action.list};
    }
    return state;
};

