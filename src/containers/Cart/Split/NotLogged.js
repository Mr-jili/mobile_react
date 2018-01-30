import React, {Component} from "react"

export default class NotLogged extends Component {
    render() {
        return (
          <div className="wj-not-logged">
            <div className="wj-no-goods">
              <img src="https://static.home.mi.com/youpin/static/m/res/images/std_shop_details_icon_wrong.png" alt=""/>
              <div className="wj-no-goods-r">
                <p>登录后才能到看购物车商品哦~</p>
                <a href="javascript:;">立即登录</a>
              </div>
            </div>
          </div>
        )
    }
}