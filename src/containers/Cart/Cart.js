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
import {connect} from "react-redux";
import actions from "../../store/actions/cart/cart";

// import {toLogin, getCartData} from "../../api/api";

class Cart extends React.Component {

  constructor() {
    super();
    this.state = {
      editor: true
    };
  }

  componentWillMount() {
    // 验证是否登录过
    let isLogin = this.props.getToLoginAPI("15134578149", "123456");
    // 如果登陆获取购物车里面的数据
    let getCartData = this.props.getCartDataAPI();
  }

  // 点击右上角编辑按钮执行的事件
  handleEditor = (e) => {
    let target = e.target;
    target.innerHTML = target.innerHTML === "编辑" ? "完成" : "编辑";
    this.setState({editor: !this.state.editor});
  };

  render() {
    let {err, userCart, recommend} = this.props;
    let editorStatus = this.state.editor;
    let handleFnStyle = () => {
      if (err === 0 && userCart.length) {
        return {bottom: ".54rem", overflowY: "scroll"};
      } else if (err === 0 && userCart.length <= 0) {
        return {bottom: "0", overflowY: "scroll"};
      } else {
        return {bottom: "0", overflowY: "hidden"};
      }
    };
    return (
      <div className="cart">

        {/*=========== 购物车头部插入区域开始 ===========*/}
        <Header back={true}>购物车
          {err === 0 && userCart.length ? <em className="wj-cart-editor" onClick={this.handleEditor}>编辑</em> : null}
        </Header>
        {/*<div className="top-bar">*/}
        {/*顶部导航区域*/}
        {/*</div>*/}
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
            err === 0 ? (<div className="wj-is-logged">
              <div className="wj-is-logged-scroll">
                <Goods userCart={userCart} editorStatus={editorStatus}/>
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
          err === 0 && userCart.length ? <ToSettle/> : null
        }
        {/*如果购物车有商品，显示底部固定去结算区域结束*/}
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(Cart);
