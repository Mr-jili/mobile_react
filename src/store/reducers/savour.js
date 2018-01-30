import * as Types from '../action-types'
let initSavour={
  list:[],
  isLoad:true
};


export let mySavour=(state=initSavour,action)=>{
    if(action.type===Types.SET_SAVOUR){
        return {...action.savour,isLoad:true};
    }
    return state;
};

export default mySavour

