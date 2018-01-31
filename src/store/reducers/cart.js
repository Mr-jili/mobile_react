import * as Types from "../action-types";

let initState = {
  isLogin: {
    user: "", msg: "", success: "", err: 1
  },
  userCart: [],
  recommend: [],
  ifShow: "",
  text: "",
  status: "",
  partStatus: "",
  allStatus: ""
};

export default function carts(state = initState, action) {
  switch (action.type) {
    // 获取是否登录状态
    case Types.GET_WHETHER_LOGIN:
      return {...state, ...action.payload};
    // 获取登录后的购物车数据和为您推荐数据
    case Types.GET_CART_DATA:
      return {...state, ...action.payload};
    // 购物车数量增加
    case Types.SET_CART_NUM_PLUS:
      return {...state, ...action.payload};
    // 购物车数量减少
    case Types.SET_CART_NUM_MINUS:
      return {...state, ...action.payload};
    // 购物车显示/隐藏模态框状态
    case Types.SET_CART_DIALOG_STATUS:
      return {...state, ifShow: action.tips.ifShow, text: action.tips.text};
    // 购物车登陆成功后修改商品数量
    case Types.SET_EDITOR_CART_DATA:
      return {...state, ...action.payload};
    // 购物车修改单个商品选中状态
    case Types.SET_CART_CHANGE_SELECT:
      return {...state, status: action.status};
    // 购物车修改分组商品选中状态
    case Types.SET_CART_CHANGE_PART_SELECT:
      return {...state, partStatus: action.partState};
    // 购物车修改所有商品选中状态
    case Types.SET_CART_CHANGE_ALL_SELECT:
      return {...state, allStatus: action.allStatus};
  }
  return state;
}