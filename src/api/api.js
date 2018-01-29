import axios from './index';


// 首页数据初始化请求
function mainInit() {
  return axios.post('/init');
}

// 首页数据初始化请求
function getMainData(id) {
  return axios.post('/main', {id});
}

// 获取分类数据
function getGoodsData(id) {
  return axios.post('/goodscategory', {id})
}

//　分类  进入详情
function goodsDefault(aid, gid) {
  return axios.post('/default', {aid, gid});
}

// 品味数据
function getSavour(offset, limit) {
  return axios.post('/savour', {offset, limit});
}

// 品味  进入详情
function savourDefault(id) {
  return axios.post('/content', {id})
}

// 获取购物车数据
function cartData() {
  return axios.post('/cart');
}

// 修改商品
function editCartData(cid,number) {
  return axios.put(`/cart?cid=${cid}&number=${number}`)
}

//  添加商品到购物车
function addCartData(cid) {
  return axios.get(`/cart?cid=${cid}`)
}

// 注册
export function toReg(username, password) {
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