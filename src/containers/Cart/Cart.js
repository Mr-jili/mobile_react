import React from 'react';
import "./Cart.less";
import ToSettle from "./Split/ToSettle";
import Goods from "./Split/Goods";
import Recomend from "./Split/Recomend";
import NoGoods from "./Split/NoGoods";
import NotLogged from "./Split/NotLogged";
import Header from "../../components/Header/Header";


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
      editor: true,
      remove: "",
      on: false
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
    let newData = this.props.refactor;
    if (target.innerHTML === "编辑") {
      target.innerHTML = "完成";

      // 刷新状态做准备
      this.setState({remove: "删除所选", on: true});

      // 清空所有的选中状态
      newData.map(item => {

        item.isSelected = false;
        item.items.map(citem => {
          citem.isflag = citem.isSelected;
          citem.isSelected = false;
          return citem;
        });
        return item;
      });

    } else {
      target.innerHTML = "编辑";

      // 跳转路由，刷新页面，重新还原所有的选中状态
      if (this.state.on) {
        // 刷新状态做准备
        this.setState({on: false});
        // alert(8)
        this.props.history.replace("/cart");
      }

      // 还原清空所有的选中状态
      // for (let i = 0; i < newData.length; i++) {
      //   let obj = newData[i];
      //   alert(obj.isSelected)
      //   if(obj.isSelected){
      //     obj.isSelected=true;
      //   }
      //
      //   for (let m = 0; m < obj.items.length; m++) {
      //     let obj1 = obj.items[m];
      //     if(obj1.isSelected){
      //       obj1.isSelected=true;
      //       alert(9)
      //     }
      //   }
      // }
      // newData.map(item=>{
      //   item.isSelected = true;
      //   item.items.map(citem=>{
      //     citem.isSelected = true;
      //     return citem;
      //   });
      //   return item;
      // });

      this.setState({remove: "", on: false});
    }
    this.setState({editor: !this.state.editor});
  };

  render() {
    let {userCart, recommend} = this.props;
    let err = null;
    if(this.props.ifLogin){
      err = this.props.ifLogin.user;
    }
    let editorStatus = this.state.editor;
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
            err ? (<div className="wj-is-logged">
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
          err && userCart.length ? <ToSettle remove={this.state.remove}/> : null
        }
        {/*如果购物车有商品，显示底部固定去结算区域结束*/}
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(Cart);
