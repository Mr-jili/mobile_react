import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotLogged extends Component {
    render() {
        return (
          <div className="wj-not-logged">
            <div className="wj-no-goods">
              <img src="https://static.home.mi.com/youpin/static/m/res/images/std_shop_details_icon_wrong.png" alt=""/>
              <div className="wj-no-goods-r">
                <p>登录后才能到看购物车商品哦~</p>
                <Link to={"/register"}>立即登录</Link>
              </div>
            </div>
          </div>
        )
    }
}