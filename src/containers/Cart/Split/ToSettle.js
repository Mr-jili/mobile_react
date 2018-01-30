import React, {Component} from "react"

export default class ToSettle extends Component {
    render() {
        return (
          <div className="wj-to-settle">
            <div className="wj-to-settle-l">
              <img src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" alt=""/>
              <span>全选</span>
            </div>

            <div className="wj-to-settle-r">
              <span><em>合计：</em>￥258.<em>00</em></span>
              <a href="javascript:;">去结算(2)</a>
            </div>
          </div>
        )
    }
}