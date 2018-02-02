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
    let newData = this.props.refactor;
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
      let newAry = newData.map(item => {
        if (item.gid === gid) {
          item.items.map(citem => {
            citem.number = num;
            return citem;
          });
        }
        return item;
      });

      this.props.getCartNumMinus(newAry, gid, num);
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
      let newAry = newData.map(item => {
        if (item.gid === gid) {
          item.items.map(citem => {
            citem.number = num;
            return citem;
          });
        }
        return item;
      });
      this.props.getCartNumPlus(newAry, gid, num);
    }
  };

  // 修改分组商品选中状态
  handleCheckAll = (e) => {
    let newArr = this.props.refactor;
    let target = e.target,
      from = target.dataset.from,
      gid = target.dataset.gid;
    let status = null;
    let newItem = newArr.map((item, index) => {
      if (item.gid === gid) {
        status = item.isSelected = !item.isSelected;
        item.items.map((citem, index) => {
          citem.isSelected = status;
          return citem;
        });
      }
      return item;
    });
    this.props.getCartChangePartSelectAPI(newItem, from, status);
  };

  // 修改单个商品选中状态
  handleChangeSelect = (e) => {
    let newArr = this.props.refactor;
    let target = e.target,
      from = target.dataset.from,
      gid = target.dataset.gid;
    let status = null, singlePrice = [];
    let newItem = newArr.map((item, index) => {
      if (item.from === from) {
        item.items.map((citem, index) => {
          if (citem.gid === gid) {
            status = citem.isSelected = !citem.isSelected;
            // 计算全选旁边的合计01：￥258.00
            if (citem.isSelected) {
              singlePrice.push(citem.price * citem.number);
            }
            // if(citem.isSelected){
            //   let totalPrice = citem.reduce((prev,next)=>{
            //     console.log(prev.price,prev.number,next.price,next.number);
            //     return (prev.price * prev.number) + (next.price * next.number);
            //   },0);
            //   console.log(totalPrice);
            // }
          }
          return citem;
        });
        item.isSelected = item.items.every((chitem, index) => chitem.isSelected === true);
      }
      return item;
    });
    let changeSelect = this.props.getCartChangeSelectAPI(newItem, gid, status);

    // 全选
    let allStatus = newItem.every(item => item.isSelected === true);
    this.props.getCartChangeAllSelectAPI(allStatus);
  };

  // 改变数据-创建元素
  componentWillMount() {
    let {userCart, editorStatus} = this.props;
    let newArr = [];
    for (let i = 0; i < userCart.length; i++) {
      let status = newArr.find((item, index) => {
        return item.from === userCart[i].from;
      });
      if (status) {
        status.items.push(userCart[i]);
      } else {
        newArr.push({
          from: userCart[i].from,
          minfreight: userCart[i].minfreight,
          isSelected: userCart[i].isSelected,
          gid: userCart[i].gid,
          price: userCart[i].price,
          number: userCart[i].number,
          title: userCart[i].title,
          items: [userCart[i]]
        });
      }
    }
    this.props.editorCartChangeRefactor(newArr);
    return newArr;
  };

  // 动态创建元素
  handleCreateHtml = () => {
    let {userCart, editorStatus, selected} = this.props;
    let newArr = this.props.refactor || [];
    for (let j = 0; j < newArr.length; j++) {
      if (newArr.from) break;
      return newArr.map((item1, index) => {
        let {from, minfreight, isSelected, items = [], gid, price, title, number} = item1;
        return (
          <li style={items.length === 0 ? {display: "none"} : null} ref={x => this.li = x} key={index} data-gid={gid}
              className="wj-goods-list">
            <div className="wj-goods-top">
              <img onClick={this.handleCheckAll} data-from={from}
                   data-price={(price * number).toFixed(2)}
                   data-isflag={isSelected}
                   data-gid={gid} data-select={isSelected} data-check="check" data-btn="checkTop"
                   src={isSelected ? "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png" : "https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_uncheck.png"}
                   alt={title}/>
              <h6>{from}</h6>
              <div className="wj-goods-free-shipp"
                   style={editorStatus ? {display: "block"} : {display: "none"}}>
                <img
                  src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png"
                  alt={title}/>
                <span>{minfreight === 0 ? "免运费" : `满${minfreight}免运费`}</span>
              </div>
            </div>
            {
              items.map((item, cindex) => (
                <div key={cindex} data-gid={item.gid} className="wj-goods-bot">
                  <img data-from={item.from} onClick={this.handleChangeSelect} data-gid={item.gid}
                       data-price={(item.price * item.number).toFixed(2)} data-check="check" data-btn="check"
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
              ))
            }
            {/*{
            items.length===0?null:(
              items.map((item, index) => (
                <div key={item.gid} data-gid={item.gid} className="wj-goods-bot">
                  <img data-from={item.from} onClick={this.handleChangeSelect} data-gid={item.gid}
                       data-price={(item.price * item.number).toFixed(2)} data-check="check" data-btn="check"
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
              ))
            )
          }*/}
          </li>
        );

      });
    }
  };

  render() {
    return (
      <div className="wj-goods">
        <ul>
          {
            this.handleCreateHtml()
          }
        </ul>

        {/*弹框*/}
        <DialogCart/>
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(Goods);