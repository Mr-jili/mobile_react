import React from 'react';
import "./Cart.less";
import ToSettle from "./Split/ToSettle";
import Goods from "./Split/Goods";
import Recomend from "./Split/Recomend";
import NoGoods from "./Split/NoGoods";
import NotLogged from "./Split/NotLogged";
import Header from "../../components/Header/Header"

/*   1. 判断是否登录 ：但是现在没有写好登陆，所以现在先调登录接口，假使已经登陆了，待登陆页面写好，再切换至校验是否登陆接口
*
*    2. 现在假使已经登陆
*
*/

import {toLogin} from "../../api/api";

export default class Cart extends React.Component {

  async componentWillMount() {
    let isLogin = await toLogin("15134578149", "123456");
    console.log(isLogin);
  }

  render() {
    return (
      <div className="cart">
        {/*=========== 购物车头部插入区域开始 ===========*/}
        <Header back={true}>购物车</Header>
        {/*<div className="top-bar">*/}
        {/*顶部导航区域*/}
        {/*</div>*/}
        {/*=========== 购物车头部插入区域结束 ===========*/}


        <div className="wj-cart-content">
          {/*如果登陆 有购物车商品 添加    style={{bottom: ".54rem", overflowY: "scroll"}}
           如果登陆 没有购物车商品 添加  style={{bottom: "0", overflowY: "scroll"}}
           如果没有登陆  不添加样式*/}

          {/*=========== 没有登陆开始 ===========*/}
          {/*<NotLogged/>*/}
          {/*=========== 没有登陆结束 ===========*/}

          {/*=========== 有登陆开始 ===========*/}
          <div className="wj-is-logged">
            <div className="wj-is-logged-scroll">
              {/*购物车没有商品开始*/}
              {/*<NoGoods/>*/}
              {/*购物车没有商品结束*/}

              {/*购物车有商品开始*/}
              {/*<Goods/>*/}
              {/*购物车有商品结束*/}

              {/*========== 为您推荐开始 ==========*/}
              {/*<Recomend/>*/} {/*只要登陆，不管有没有商品都需要加载*/}
              {/*========== 为您推荐结束 ==========*/}
            </div>
          </div>
          {/*=========== 有登陆结束 ===========*/}
        </div>

        {/*如果购物车有商品，显示底部固定去结算区域开始*/}
        {/*<ToSettle/>*/}
        {/*如果购物车有商品，显示底部固定去结算区域结束*/}
      </div>
    )
  }
}