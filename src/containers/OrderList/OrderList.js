import React, {Component} from 'react';
import "./OrderList.less";
import Header from '../../components/Header/Header';

export default class OrderList extends Component {
  render() {
    return (
      <div className="user-order-list">
        <Header back={true}>我的订单</Header>
        <div className="mainBox">
          <div className="order-listBox">
            <div className="order-list-item">
              <div className="item-titBox">
                <span>全部订单</span>
              </div>
            </div>
            <div className="order-list-item">
              <div className="item-titBox">
                <span>待付款</span>
              </div>
            </div>
            <div className="order-list-item">
              <div className="item-titBox">
                <span>待收货</span>
              </div>
            </div>
            <div className="order-list-item">
              <div className="item-titBox">
                <span>退款订单</span>
              </div>
            </div>
            <div className="order-list-item">
              <div className="item-titBox">
                <span>已收货</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}