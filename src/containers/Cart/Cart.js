import React from 'react';
import "./Cart.less";
import ToSettle from "./Split/ToSettle";
import Goods from "./Split/Goods";
import Recomend from "./Split/Recomend";
import NoGoods from "./Split/NoGoods";
import NotLogged from "./Split/NotLogged";
import Header from "../../components/Header/Header";

import {connect} from "react-redux";
import actions from "../../store/actions/cart/cart";

class Cart extends React.Component {

  constructor() {
    super();
    this.state = {
      editor: true,
      remove: "",
      on: false,
      OFF: true,
      oldData: [],
      newData: []
    };
  }

  async componentWillMount() {
    // 向后台发送请求确认是否登录
    await this.props.getToLoginAPI();

    // 获取redux登录状态
    let {user} = this.props.ifLogin;
    if (!!user) {
      // 如果登陆获取购物车里面的数据
      await this.props.getCartDataAPI();
    }
  }


  // 点击右上角编辑按钮执行的事件
  handleEditor = (e) => {
    let target = e.target;

    if (this.state.OFF) {
      this.setState({oldData: this.props.refactor});
      this.setState({newData: JSON.parse(JSON.stringify(this.props.refactor))});
      this.setState({OFF: false});
    }

    let oldData = this.state.oldData.length ? this.state.oldData : this.props.refactor,
      newData = this.state.newData.length ? this.state.newData : JSON.parse(JSON.stringify(this.props.refactor));
    if (target.innerHTML === "编辑") {
      target.innerHTML = "完成";
      // 刷新状态做准备
      this.setState({remove: "删除所选", on: true});
      // 清空所有的选中状态
      newData = newData.map(item => {
        item.isSelected = false;
        item.items.map(citem => {
          citem.isSelected = false;
          return citem;
        });
        return item;
      });
      this.props.editorStatusAllFalse(newData);
    } else {
      target.innerHTML = "编辑";

      // 跳转路由，刷新页面，重新还原所有的选中状态
      if (this.state.on) {
        // 刷新状态做准备
        this.setState({on: false});
        this.props.history.replace("/cart");
      }
      this.setState({remove: "", on: false});
      // 恢复以前选择点击编辑的状态
      this.props.editStatusOld(oldData);
    }
  };

  render() {
    let {userCart, recommend} = this.props;
    let err = null;
    if (this.props.ifLogin) {
      err = this.props.ifLogin.user;
    }
    let handleFnStyle = () => {
      if (err && userCart.length) {
        return {bottom: ".54rem", overflowY: "scroll"};
      } else if (err && userCart.length <= 0) {
        return {bottom: "0", overflowY: "scroll"};
      } else {
        return {bottom: "0", overflowY: "hidden"};
      }
    };

    return (
      <div className="cart">
        {/*=========== 购物车头部插入区域开始 ===========*/}
        <Header back={true}>购物车
          {err && userCart.length ? <em className="wj-cart-editor" onClick={this.handleEditor}>编辑</em> : null}
        </Header>

        {/*=========== 购物车头部插入区域结束 ===========*/}

        <div className="wj-cart-content" style={handleFnStyle()}>
          {/*如果登陆 有购物车商品 添加    style={{bottom: ".54rem", overflowY: "scroll"}}
           如果登陆 没有购物车商品 添加  style={{bottom: "0", overflowY: "scroll"}}
           如果没有登陆  不添加样式*/}

          {/*=========== 没有登陆开始 ===========*/}
          {/*<NotLogged/>*/}
          {/*=========== 没有登陆结束 ===========*/}

          {/*=====================================================*/}
          {
            err ? (<div className="wj-is-logged">
              <div className="wj-is-logged-scroll">
                {/*<Goods userCart={userCart} editorStatus={editorStatus}/>*/}
                {userCart.length ? <Goods/> : null}
                <Recomend recommend={recommend}/>
              </div>
            </div>) : <NotLogged/>
          }
          {/*=====================================================*/}

          {/*=========== 有登陆开始 ===========*/}
          {/*<div className="wj-is-logged">*/}
          {/*<div className="wj-is-logged-scroll">*/}
          {/*购物车没有商品开始*/}
          {/*<NoGoods/>*/}
          {/*购物车没有商品结束*/}

          {/*购物车有商品开始*/}
          {/*<Goods/>*/}
          {/*购物车有商品结束*/}

          {/*========== 为您推荐开始 ==========*/}
          {/*<Recomend/> 只要登陆，不管有没有商品都需要加载*/}
          {/*========== 为您推荐结束 ==========*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*=========== 有登陆结束 ===========*/}
        </div>

        {/*如果购物车有商品，显示底部固定去结算区域开始*/}
        {
          err && userCart.length ? <ToSettle remove={this.state.remove}/> : null
        }
        {/*如果购物车有商品，显示底部固定去结算区域结束*/}
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(Cart);
