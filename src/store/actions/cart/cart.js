import * as Types from "../../action-types";
import {toLogin, getCartData, editCartData} from "../../../api/api";

let actions = {
  // 获取是否登陆api状态
  getToLoginAPI(username, password) {
    return function (dispatch, getState) {
      dispatch({type: Types.GET_WHETHER_LOGIN, payload: toLogin(username, password)});
    }
  },
  // 登录成功后发送请求获取购物车/为您推荐数据
  getCartDataAPI() {
    return function (dispatch, getState) {
      if (!getState().cart.isLogin.err) return;
      dispatch({type: Types.GET_CART_DATA, payload: getCartData()});
    }
  },
  // 购物车数量增加
  getCartNumPlus(gid, number) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_NUM_PLUS, payload: editCartData(gid, number)});
    }
  },
  // 购物车数量减少
  getCartNumMinus(gid, number) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_NUM_MINUS, payload: editCartData(gid, number)});
    }
  },
  // 购物车显示/隐藏模态框状态
  getCartDialogStatus(ifShow, text) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_DIALOG_STATUS, tips: {ifShow, text}});
    }
  },
  // 购物车登陆成功后修改商品数量
  /*getEditorDataAPI(gid, number) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_EDITOR_CART_DATA, payload: editCartData(gid, number)});
    }
  }*/
};

export default actions;