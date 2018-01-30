import axios from './index';

// 首页数据初始化请求
export function mainInit() {
  return axios.post('/init');
}

// 首页数据初始化请求
export function getMainData(id) {
  return axios.post('/main', {id});
}

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

// 品味数据
export function getSavour(offset, limit) {
  return axios.post('/savour', {offset, limit});
}

// 品味  进入详情
export function savourDetail(gid) {
  return axios.post('/content', {gid})
}

// 获取购物车数据
export function getCartData() {
  return axios.post('/cart');
}

// 修改商品
export function editCartData(gid, number) {
  return axios.put(`/cart?gid=${gid}&number=${number}`)
}

// 添加商品到购物车
export function addCartData(gid, number) {
  return axios.get(`/cart?gid=${gid}&number=${number}`)
}

// 移除购物车中的商品
export function delCartData(gid) {
  return axios.delete(`/cart?gid=${gid}`)
}

// 注册
export function toRegister(username, password) {
  return axios.post('/register', {username, password});
}

// 登录
export function toLogin(username, password) {
  return axios.post('/login', {username, password})
}

// 校验是否登陆
export function toValidate() {
  return axios.get('/validate');
}