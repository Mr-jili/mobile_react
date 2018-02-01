import * as Types from '../action-types'
let initState={
  listLink:[],
  banner:{G0001:{url:""}},
  data:[]
}


function goodscategory(state=initState,action) {
  switch (action.type){
    case Types.SET_GOODSDATA:
      return {...state,...action.payload};
    case Types.SET_GOODS_LEVEL_DATA:
      return {...state,data:[...action.payload.data]}
  }
  return state;
}
export default goodscategory