import axios from './index';

// 首页数据初始化请求
export function mainInit() {
  return axios.post('/init');
}

// 获取首页数据请求
export function getMainData(id) {
  return axios.post('/main', {id});
}

/*----------------------------*/

// 获取分类初始数据
export function getGoodsData() {
  return axios.post('/goodscategory')
}

// 获取二级分类列表
export function getLevelData(id) {
  return axios.get(`/goodscategory?id=${id}`);
}

//　分类  进入详情
export function goodsDetail(aid, gid) {
  return axios.post('/detail', {aid, gid});
}

/*----------------------------*/

// 品味数据
export function getSavour(offset, limit) {
  return axios.post('/savour', {offset, limit});
}

// 品味  进入详情
export function savourDetail(gid) {
  return axios.post('/content', {gid})
}

/*----------------------------*/

// 商品详情页面
export function getCommodity(gid) {
  return axios.post(`/detail/:${gid}`)
}

// 获取评价
export function getEvaluate(gid) {
  return axios.post(`/evaluate/:${gid}`)
}

// 收藏操作
export function setCollection(gid, type) {
  return axios.get(`/collection/:${gid}?type=${type}`);
}

// 获取购物车数量
export function getCollLen() {
  return axios.get('/collLength');
}

// 添加商品到购物车 返回购物车内商品的数量
export function addCartData(gid, number = 1) {
  return axios.get(`/cart?gid=${gid}&number=${number}`)
}

/*----------------------------*/

// 获取购物车数据
export function getCartData() {
  return axios.post('/cart');
}

// 修改商品
export function editCartData(gid, number) {
  return axios.put(`/cart?gid=${gid}&number=${number}`)
}

// 移除购物车中的商品
export function delCartData(gid) {
  return axios.post(`/cart/delete`, {gid});
}

// 修改单个商品选中状态
export function changeSelect(gid, state) {
  return axios.get(`/cart/singlestate?gid=${gid}&state=${state}`)
}

// 修改分组商品选中状态
export function changePartSelect(from, state) {
  return axios.get(`/cart/partstate?from=${from}&state=${state}`)
}

// 修改所有商品选中状态
export function changeAllSelect(state) {
  return axios.get(`/cart/allstate?state=${state}`)
}

/*----------------------------*/

// 获取热门搜索和历史记录
export function getHistory() {
  return axios.get('/search');
}

// 搜索接口
export function searchInfo(info) {
  return axios.post('/search', {info});
}

// 清空历史搜索
export function clearHistorySearch() {
  return axios.delete('/search');
}

/*----------------------------*/

// 获取验证码
export function getCode(mobile) {
  return axios.get(`/phonecode?mobile=${mobile}`);
}

// 注册
export function toRegister(username, password) {
  return axios.post('/register', {username, password});
}

// 登录
export function toLogin(username, password) { // password || mobilecode
  return axios.post('/login', {username, password})
}

// 退出登录
export function signOut() {
  return axios.delete('/signout');
}

// 获取个人信息
export function getUserInfo() {
  return axios.post('/userInfo');
}

/*----------------------------*/

// 校验是否登陆
export function toValidate() {
  return axios.get('/validate');
}