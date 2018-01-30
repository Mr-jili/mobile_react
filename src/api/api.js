import axios from './index';

// 首页数据初始化请求
export function mainInit() {
  return axios.post('/init');
}

// 首页数据初始化请求
export function getMainData(id) {
  return axios.post('/main', {id});
}

// 获取分类数据
export function getGoodsData(id) {
  return axios.post('/goodscategory', {id})
}

//　分类  进入详情
export function goodsDefault(aid, gid) {
  return axios.post('/default', {aid, gid});
}

// 品味数据
export function getSavour(offset, limit) {
  return axios.post('/savour', {offset, limit});
}

// 品味  进入详情
export function savourDetail(id) {
  return axios.post('/content', {id})
}

// 获取购物车数据
export function getCartData() {
  return axios.post('/cart');
}

// 修改商品
export function editCartData(cid,number) {
  return axios.put(`/cart?cid=${cid}&number=${number}`)
}

//  添加商品到购物车
export function addCartData(gid,number) {
  return axios.get(`/cart?gid=${gid}&number=${number}`)
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