import * as Types from "../action-types";

let initState = {
  ifLogin: "",
  userCart: [],
  recommend: [],
  ifShow: "",
  text: "",
  partStatus: "",
  allStatus: "",
  refactor: [],
  newRefactor: []
};

export default function carts(state = initState, action) {
  switch (action.type) {
    // 获取是否登录状态
    case Types.GET_WHETHER_LOGIN:
      return {...state, ifLogin: action.payload};
    // 获取登录后的购物车数据和为您推荐数据
    case Types.GET_CART_DATA:
      return {...state, userCart: action.payload.userCart, recommend: action.payload.recommend};
    // 购物车数量增加
    case Types.SET_CART_NUM_PLUS:
      return {...state, refactor: action.newAry, newRefactor: action.newAry};
    // 购物车数量减少
    case Types.SET_CART_NUM_MINUS:
      return {...state, refactor: action.newAry, newRefactor: action.newAry};
    // 购物车显示/隐藏模态框状态
    case Types.SET_CART_DIALOG_STATUS:
      return {...state, ifShow: action.tips.ifShow, text: action.tips.text};
    // 购物车登陆成功后修改商品数量
    case Types.SET_EDITOR_CART_DATA:
      return {...state, ...action.payload};
    // 购物车修改单个商品选中状态
    case Types.SET_CART_CHANGE_SELECT:
      return {...state, refactor: action.childrenItem, newRefactor: action.childrenItem};
    // 购物车修改分组商品选中状态
    case Types.SET_CART_CHANGE_PART_SELECT:
      return {
        ...state,
        refactor: action.parentItem,
        newRefactor: action.parentItem,
        partStatus: action.partStatus,
        allStatus: action.allStatus
      };
    // 购物车修改所有商品选中状态
    case Types.SET_CART_CHANGE_ALL_SELECT:
      return {...state, allStatus: action.allStatus};
    // 购物车修改原来数据后存储的refactoring
    case Types.SET_CART_CHANGE_ALL_Refactor:
      return {...state, refactor: action.value, newRefactor: action.value};
    // 移除购物车中的商品
    case Types.SET_CART_REMOVE_GOODS:
      return {...state, refactor: action.newAry, newRefactor: action.newAry};
    // 点击编辑到完成，修改所有的选中为不选状态
    case Types.SET_CART_STATUS_ALL_FALSE:
      return {...state, refactor: action.refactor};
    // 点击完成到编辑，恢复以前点击完成前的选择状态
    case Types.SET_CART_STATUS_OLD:
      return {...state, refactor: action.oldData};
  }
  return state;
}