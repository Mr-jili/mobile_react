<<<<<<< HEAD:src/store/reducers/detail/detail.js
import * as Types from '../../action-types'
let initDetail={
    msg:'',
    err:0
};
export default function detail(state=initDetail,action) {
    switch (action.type){
        case Types.GET_DETAIL:
            return {...action.detail};
    }
    return state;
=======
import * as Types from '../action-types'

let initDetail = {
  msg: '',
  err: 0
};
export default function detail(state = initDetail, action) {
  switch (action.type) {
    case Types.GET_DETAIL:
      return {...state, ...action.detail};
    case Types.GET_EVALUATE:
      return {...state, ...action.evaluate}
  }
  return state;
>>>>>>> 16ab9603317c836afcf274a426522c1f7b898ff1:src/store/reducers/detail.js
}


