import * as Types from "../../action-types";
import {
  toLogin,
  getCartData,
  editCartData,
  changeSelect,
  changePartSelect,
  changeAllSelect,
  delCartData, toValidate
} from "../../../api/api";

let actions = {
  // 获取是否登陆api状态
  getToLoginAPI() {
    return {type: Types.GET_WHETHER_LOGIN, payload: toValidate()};
  },
  // 登录成功后发送请求获取购物车/为您推荐数据
  getCartDataAPI() {
    return {type: Types.GET_CART_DATA, payload: getCartData()}
  },
  // 购物车数量增加
  getCartNumPlus(item, gid, number) {
    return function (dispatch, getState) {
      if (number === 16) return;
      dispatch({type: Types.SET_CART_NUM_PLUS, newAry: item, payload: editCartData(gid, number)});
    }
  },
  // 购物车数量减少
  getCartNumMinus(item, gid, number) {
    return function (dispatch, getState) {
      if (number === 0) return;
      dispatch({type: Types.SET_CART_NUM_MINUS, newAry: item, payload: editCartData(gid, number)});
    }
  },
  // 购物车显示/隐藏模态框状态
  getCartDialogStatus(ifShow, text) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_DIALOG_STATUS, tips: {ifShow, text}});
    }
  },
  // 购物车修改单个商品选中状态
  getCartChangeSelectAPI(item, gid, state) {
    console.log(1111);
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_CHANGE_SELECT, childrenItem: item, payload: changeSelect(gid, state)});
    }
  },
  // 购物车修改分组商品选中状态
  getCartChangePartSelectAPI(item, from, state) {
    return function (dispatch, getState) {
      dispatch({
        type: Types.SET_CART_CHANGE_PART_SELECT,
        parentItem: item,
        payload: changePartSelect(from, state)
      });
    }
  },
  // 购物车修改所有商品选中状态
  getCartChangeAllSelectAPI(state) {
    return function (dispatch, getState) {
      dispatch({
        type: Types.SET_CART_CHANGE_ALL_SELECT,
        allStatus: state
        //payload: changeAllSelect(state)
      });
    }
  },
  // 购物车修改原来数据后存储的refactoring
  editorCartChangeRefactor(value) {
    return function (dispatch, getState) {
      dispatch({type: Types.SET_CART_CHANGE_ALL_Refactor, value});
    }
  },
  // 移除购物车中的商品
  removeCartListAPI(item, gid) {
    return function (dispatch, getState) {
      console.log(gid);
      dispatch({type: Types.SET_CART_REMOVE_GOODS, newAry: item, payload: delCartData(gid)});
    }
  }
};

export default actions;