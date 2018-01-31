import * as Types from "../action-types";
import {toLogin, toValidate} from "../../api/api";

let actions = {
  toLoginAPI(username, password, history) {
    return function (getState, dispatch) {
      toLogin(username, password).then(data => {
        dispatch({type: Types.USER_LOGIN, userLogin: data});
        if (data.err === 0) {
          history.push("/usercenter");
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
};

export default actions;