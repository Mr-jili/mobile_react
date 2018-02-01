import * as Types from '../action-types'
import {getCommodity} from '../../api/api'
let actions={
   getDetailAPI(gid){
        return function (dispatch,getState) {
            getCommodity(gid).then(function (data) {
                dispatch({type:Types.GET_DETAIL,detail:data});
                if(data.err===1){

                }
            })
        }
    }
};
export default actions