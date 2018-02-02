import {getCollLen} from "../api/api";

export const INIT_STATE = 'INIT_STATE';


//商品详情是否登录
export const DERAIL_LOGIN_J='DERAIL_LOGIN_J';
//商品详情页面
export const GET_DETAIL='GET_DETAIL';

//商品详情收藏
export const GET_COLLECT='GET_COLLECT';

//商品详情购物车
export const GET_COLLEN='GET_COLLEN';

//商品详情添加购物车
export const DETAIL_CART='DETAIL_CART';

//商品详情评价
export const GET_EVALUATE='GET_EVALUATE';

// 品味改变状态
export const CHANGE_SAVOUR = 'CHANGE_SAVOUR';




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

// 购物车修改单个商品选中状态
export const SET_CART_CHANGE_SELECT = "SET_CART_CHANGE_SELECT";

// 购物车修改分组商品选中状态
export const SET_CART_CHANGE_PART_SELECT = "SET_CART_CHANGE_PART_SELECT";

// 购物车修改所有商品选中状态
export const SET_CART_CHANGE_ALL_SELECT = "SET_CART_CHANGE_ALL_SELECT";

// 购物车修改原来数据后存储的refactoring
export const SET_CART_CHANGE_ALL_Refactor = "SET_CART_CHANGE_ALL_Refactor";

// 移除购物车中的商品
export const SET_CART_REMOVE_GOODS = "SET_CART_REMOVE_GOODS";

//==>商品分类部分
//设置商品分类信息
export const SET_GOODSDATA = "SET_GOODSDATA";

//设置二级分类数据
export const SET_GOODS_LEVEL_DATA = "SET_GOODS_LEVEL_DATA";

//设置支付列表
export const SET_PAY_DATA = "SET_PAY_DATA";

//设置支付列表，确认页面用
export const SET_PAYP_DATA_PASSWORD = "SET_PAYP_DATA_PASSWORD";

//首页数据
export const GET_HOME_DATA = "GET_HOME_DATA";
//首页加载热量组件
export const GET_LOADER_HOME_DATA = "GET_LOADER_HOME_DATA";

export const USER_LOGIN = "USER_LOGIN";//登录

export const USER_INFO_QUIT = "USER_INFO_QUIT";//退出登录

export const SET_USER_INFO = "SET_USER_INFO";//设置个人中心



