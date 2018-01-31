export const INIT_STATE = 'INIT_STATE';


export const CHANGE_SAVOUR='CHANGE_SAVOUR'; // 品味改变状态

//登录或注册时把获得的数据存在redux中
export const SET_USER_INFO = "SET_USER_INFO";

// 购物车获取是否登陆状态
export const GET_WHETHER_LOGIN = "GET_WHETHER_LOGIN";

// 购物车登陆成功获取购物车和为您推荐数据
export const GET_CART_DATA = "GET_CART_DATA";

// 购物车数量增加
export const SET_CART_NUM_PLUS = "SET_CART_NUM_PLUS";

// 购物车数量减少
export const SET_CART_NUM_MINUS = "SET_CART_NUM_MINUS";

// 购物车显示/隐藏模态框状态
export const SET_CART_DIALOG_STATUS = "SET_CART_DIALOG_STATUS";

// 购物车登陆成功后修改商品数量
export const SET_EDITOR_CART_DATA = "SET_EDITOR_CART_DATA";

//==>商品分类部分
//设置商品分类信息
export const SET_GOODSDATA = "SET_GOODSDATA";

//设置二级分类数据
export const SET_GOODS_LEVEL_DATA = "SET_GOODS_LEVEL_DATA";
