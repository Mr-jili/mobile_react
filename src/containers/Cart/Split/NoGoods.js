import React, {Component} from "react"

export default class NoGoods extends Component {
    render() {
        return (
          <div className="wj-no-goods">
            <img src="https://static.home.mi.com/youpin/static/m/res/images/cart_grey.png" alt=""/>
            <div className="wj-no-goods-r">
              <p>购物车没有商品</p>
              <a href="javascript:;">去逛逛</a>
            </div>
          </div>
        )
    }
}