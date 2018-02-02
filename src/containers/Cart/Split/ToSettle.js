import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../../store/actions/cart/cart";
import {withRouter} from "react-router-dom";

class ToSettle extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getCartChangeAllSelectAPI(this.props.userCart.every(item => item.isSelected));
  }

  // 修改所有商品选中状态
  handleCheckAllList = (e) => {
    let target = e.target;
    let newArr = this.props.refactor;
    // 改自己
    let status = !this.props.allStatus;
    let newItem = newArr.map((item, index) => {
      item.isSelected = status;
      item.items.map((citem, index) => {
        citem.isSelected = status;
        return citem;
      });
      return item;
    });
    // 全选
    this.props.getCartChangeAllSelectAPI(status);
  };

  // 删除购物车里面的商品
  handleRemove = (e) => {
    let newData = this.props.refactor;
    let removeAry = [];
    let newAry = newData.map(item => {
      if (item.isSelected) {
        removeAry.push(item.gid);
        for (let key in item) {
          delete item[key];
        }
        return;
      }
      item.items.map((citem, index) => {
        if (citem.isSelected) {
          removeAry.push(citem.gid);
          for (let key in citem) {
            delete citem[key];
          }
          return;
        }
        return citem;
      });
      if (item.items.length === 0) {
        for (let key in item) {
          delete item[key];
        }
      }
      return item;
    });
    if (removeAry.length === 0) {
      this.props.getCartDialogStatus("block", "一个都没选中");
      setTimeout(() => {
        this.props.getCartDialogStatus("none", "一个都没选中");
      }, 2000);
      return;
    }
    this.props.getCartDialogStatus("block", "主人，我要走了");
    setTimeout(() => {
      this.props.getCartDialogStatus("none", "主人，我要走了");
    }, 2000);
    this.props.removeCartListAPI(newAry, removeAry);
    let delIndex = null;
    newAry.forEach((item, index) => {
      if (typeof item === 'undefined') {
        delIndex = index;
      }
    });
    if(delIndex !== null){
      newAry.splice(delIndex,1);
    }
  };

  // 计算去结算里面的个数
  computedSettlement = () => {
    let newData = this.props.refactor;
    let statusNum = 0;

    newData.find(item => {
      item.items.find(citem => {
        if (citem.isSelected) {
          statusNum++;
        }
      });
    });
    return statusNum;
  };

  // 计算合计里面的值
  computedCombinedNum = () => {
    let newData = this.props.refactor;
    let combinedNum = 0;
    newData.find(item => {
      item.items.find(citem => {
        if (citem.isSelected) {
          combinedNum += citem.price * citem.number;
        }
      });
    });
    return Math.round(combinedNum);
  };

  // 验证是否结算
  handlePay = (e) => {
    if (!this.computedSettlement()) {
      this.props.getCartDialogStatus("block", "一个都没选中");
      setTimeout(() => {
        this.props.getCartDialogStatus("none", "一个都没选中");
      }, 2000);
      return;
    }
    this.props.history.push("/pay");
  };

  render() {
    return (
      <div className="wj-to-settle">
        <div onClick={this.handleCheckAllList} className="wj-to-settle-l">
          {
            this.props.remove ?
              <img src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"
                   alt=""/> : <img data-select="false"
                                   src={this.props.allStatus ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                                   alt=""/>

          }

          <span>全选</span>
        </div>

        {
          this.props.remove ? (<div className="wj-to-settle-r">
            <span style={{display: "none"}}><em>合计：</em>￥258.<em>00</em></span>
            <a onClick={this.handleRemove} href="javascript:;">{this.props.remove}</a>
          </div>) : (<div className="wj-to-settle-r">
            <span><em>合计：</em>￥{this.computedCombinedNum()}.<em>00</em></span>
            <a onClick={this.handlePay}>去结算({this.computedSettlement()})</a>
          </div>)
        }
        {/*<div className="wj-to-settle-r">*/}
        {/*<span><em>合计：</em>￥258.<em>00</em></span>*/}
        {/*<a href="javascript:;">去结算(2)</a>*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default withRouter(connect(state => ({...state.cart}), actions)(ToSettle));