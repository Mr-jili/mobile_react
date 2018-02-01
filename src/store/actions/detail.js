import * as Types from '../action-types'
import {getCommodity,getEvaluate,setCollection} from '../../api/api'
let actions={
   getDetailAPI(gid){
        return function (dispatch,getState) {
            getCommodity(gid).then(function (data) {
                dispatch({type:Types.GET_DETAIL,detail:data});
            })
        }
    },

   getEvaluate(gid){
       return function (dispatch,getState) {
           getEvaluate(gid).then(function (data) {
               dispatch({type:Types.GET_EVALUATE,evaluate:data});
           })
       }
   },
    setCollection(){

    }
};
export default actions