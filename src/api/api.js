import axios from './index';


// 首页数据请求
function getMainData() {
  return axios('/main');
}
//
function getGoodsData() {
  return axios('/scategory')
}