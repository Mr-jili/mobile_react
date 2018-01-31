import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../../store/actions/cart/cart";
import DialogCart from "../common/DialogCart";


class Goods extends Component {

  constructor() {
    super();
    this.state = {newItem: null};
  }

  // 加减购物车数量
  handleEditNumber = (e) => {
    let target = e.target;
    // 减
    if (target.dataset.btn === "minus") {
      let gid = target.dataset.gid;
      let num = target.dataset.num;
      num--;
      if (num === 0) {
        this.props.getCartDialogStatus("block", "杯具啦，已到最低值了");
        setTimeout(() => {
          this.props.getCartDialogStatus("none", "杯具啦，已到最低值了");
        }, 2000);
        return;
      }
      this.props.getCartNumMinus(gid, num);
    }
    // 加
    if (target.dataset.btn === "plus") {
      let gid = target.dataset.gid;
      let num = target.dataset.num;
      num++;
      if (num === 16) {
        this.props.getCartDialogStatus("block", "杯具啦，已到最高值了");
        setTimeout(() => {
          this.props.getCartDialogStatus("none", "杯具啦，已到最高值了");
        }, 2000);
        return;
      }
      this.props.getCartNumPlus(gid, num);
    }
  };

  // 修改分组商品选中状态
  handleCheckAll = (e) => {
    let {userCart, editorStatus} = this.props;
    let target = e.target,
      from = target.dataset.from,
      gid = target.dataset.gid;
    // let newItem = userCart.find(item => item.gid === gid);
    userCart.every(item => {
      if (item.gid === gid) {
        item.isSelected = !item.isSelected;
        this.props.getCartChangePartSelectAPI(from, item.isSelected);
        //return item.isSelected;
      }
    });
    //this.props.getCartChangePartSelectAPI(from, status);
  };

  // 修改单个商品选中状态
  handleChangeSelect = (e) => {
    let {userCart, editorStatus} = this.props;
    let target = e.target,
      gid = target.dataset.gid;
    let newItem = userCart.find(item => item.gid === gid);

    let status = newItem.isSelected = !newItem.isSelected;
    let changeSelect = this.props.getCartChangeSelectAPI(gid, status);
  };

  render() {
    let {userCart, editorStatus} = this.props;
    let fromLen = {}, newItem = null;
    return (
      <div className="wj-goods">
        <ul>
          {
            userCart.map((item, index) => {
              if (!fromLen[item.from]) {
                fromLen[item.from] = item.from;
                return (
                  <li key={item.gid} className="wj-goods-list">
                    <div className="wj-goods-top">
                      <img onClick={this.handleCheckAll} data-from={item.from}
                           data-price={(item.price * item.number).toFixed(2)}
                           data-gid={item.gid} data-btn="checkTop"
                           src={item.isSelected ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                           alt={item.title}/>
                      <h6>{item.from}</h6>
                      <div className="wj-goods-free-shipp"
                           style={editorStatus ? {display: "block"} : {display: "none"}}>
                        <img
                          src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png"
                          alt={item.title}/>
                        <span>{item.minfreight === 0 ? "免运费" : "满150免运费"}</span>
                      </div>
                    </div>
                    <div data-gid={item.gid} className="wj-goods-bot">
                      <img onClick={this.handleChangeSelect} data-gid={item.gid}
                           data-price={(item.price * item.number).toFixed(2)} data-btn="check"
                           className="icon"
                           src={item.isSelected ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                           alt={item.title}/>
                      <div className="wj-goods-products">
                        <a href="javascript:;" className="wj-goods-l">
                          <img src={item.url} alt={item.title}/>
                        </a>
                        <div className="wj-goods-r">
                          <a href="javascript:;">
                            <p className="wj-goods-til">{item.title}</p>
                            <p className="wj-goods-mintotal">小计：{(item.price * item.number).toFixed(2)}元</p>
                          </a>
                          <div className="wj-goods-pricebar">
                            <div className="wj-goods-price">￥<span>{item.price}</span></div>
                            <div onClick={this.handleEditNumber} className="wj-goods-price-btn">
                              <img data-num={item.number} data-gid={item.gid} data-btn="minus"
                                   src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_minus_disable.png"
                                   alt={item.title}/>
                              <span>{item.number}</span>
                              <img data-num={item.number} data-gid={item.gid} data-btn="plus"
                                   src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_plus_enable.png"
                                   alt={item.title}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
              newItem = item;
              console.log(newItem);
            })
          }
          {/*{
            userCart.map(item => (
              <li key={item.gid} className="wj-goods-list">
                <div className="wj-goods-top">
                  <img onClick={this.handleCheckAll} data-from={item.from}
                       data-price={(item.price * item.number).toFixed(2)}
                       data-gid={item.gid} data-btn="checkTop"
                       src={item.isSelected ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                       alt={item.title}/>
                  <h6>{item.from}</h6>
                  <div className="wj-goods-free-shipp" style={editorStatus ? {display: "block"} : {display: "none"}}>
                    <img
                      src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png"
                      alt={item.title}/>
                    <span>{item.minfreight === 0 ? "免运费" : "满150免运费"}</span>
                  </div>
                </div>
                <div className="wj-goods-bot">
                  <img onClick={this.handleChangeSelect} data-gid={item.gid}
                       data-price={(item.price * item.number).toFixed(2)} data-btn="check"
                       className="icon"
                       src={item.isSelected ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                       alt={item.title}/>
                  <div className="wj-goods-products">
                    <a href="javascript:;" className="wj-goods-l">
                      <img src={item.url} alt={item.title}/>
                    </a>
                    <div className="wj-goods-r">
                      <a href="javascript:;">
                        <p className="wj-goods-til">{item.title}</p>
                        <p className="wj-goods-mintotal">小计：{(item.price * item.number).toFixed(2)}元</p>
                      </a>
                      <div className="wj-goods-pricebar">
                        <div className="wj-goods-price">￥<span>{item.price}</span></div>
                        <div onClick={this.handleEditNumber} className="wj-goods-price-btn">
                          <img data-num={item.number} data-gid={item.gid} data-btn="minus"
                               src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_minus_disable.png"
                               alt={item.title}/>
                          <span>{item.number}</span>
                          <img data-num={item.number} data-gid={item.gid} data-btn="plus"
                               src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_plus_enable.png"
                               alt={item.title}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }*/}
          {/* <li className="wj-goods-list">
                头部
                <div className="wj-goods-top">
                  <img src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <h6>成都趣睡科技有限公司</h6>
                  <div className="wj-goods-free-shipp">
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png" alt=""/>
                    <span>免运费</span>
                  </div>
                </div>
                商品内容
                <div className="wj-goods-bot">
                  <img className="icon"
                       src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <div className="wj-goods-products">
                    <div className="wj-goods-l">
                      <img
                        src="https://static.home.mi.com/app/shop/img?id=shop_e9e788dc46eb16bc358ccefc221e6a72.jpeg&w=240&h=240"
                        alt=""/>
                    </div>
                    <div className="wj-goods-r">
                      <p className="wj-goods-til">8H枕套8H乳胶枕Z1 内外双枕套-混米色</p>
                      <p className="wj-goods-mintotal">小计：79.00元</p>
                      <div className="wj-goods-pricebar">
                        <div className="wj-goods-price">￥<span>79</span></div>
                        <div className="wj-goods-price-btn">
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_minus_disable.png"
                            alt=""/>
                          <span>1</span>
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_plus_enable.png"
                            alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>*/}
        </ul>

        {/*弹框*/}
        <DialogCart/>
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(Goods);