import React from 'react';
import "./UserCenter.less";

import user from "../../images/icon_default_head_portrait.png";
import right_arw from "../../images/device_shop_right_arrow.png";
import pending_payment from "../../images/personal_icon_paid.png";
import goods_receipt from "../../images/personal_icon_receipt.png";
import evaluate from "../../images/personal_icon_received_goods.png";
import refund from "../../images/personal_icon_return_goods.png";
import assets from "../../images/personal_icon_assets.png";
import collect from "../../images/personal_icon_collection.png";
import address from "../../images/personal_icon_address.png";
import message from "../../images/set_icon_message_new.png";
import feed from "../../images/personal_icon_feedback.png";


export default class UserCenter extends React.Component {
  render() {
    return (
      <div className="lyc-user-center">
        <div className="lyc-user-list">
          <div className="lyc-user-header">
            <div className="lyc-user-left">
              <div className="lyc-user-img">
                <img src={user}/>
              </div>
              <div className="lyc-user-login">
                <span>请登录</span>
              </div>
            </div>
            <div className="lyc-user-right">
              <img src={right_arw}/>
            </div>
          </div>
          <div className="lyc-user-orderBox">
            <div className="lyc-user-order">
              <div className="lyc-order">
                <span>我的订单</span>
              </div>
              <div className="lyc-order-arw">
                <img src={right_arw}/>
              </div>
            </div>
            <div className="lyc-user-order-detail">
              <div className="lyc-pending-payment information">
                <img src={pending_payment}/>
                <span>待付款</span>
              </div>
              <div className="lyc-goods-receipt information">
                <img src={goods_receipt}/>
                <span>待收货</span>
              </div>
              <div className="lyc-pending-payment information">
                <img src={evaluate}/>
                <span>待评价</span>
              </div>
              <div className="lyc-pending-payment information">
                <img src={refund}/>
                <span>退款订单</span>
              </div>
            </div>
          </div>
          <div className="lyc-user-about-me">
            <div className="about-me-top">
              <div className="lyc-user-assets">
                <div className="assets-img">
                  <img src={assets}/>
                </div>
                <div className="assets-name">
                  <span>我的资产</span>
                </div>
                <div className="assets-discount">
                  <span>优惠券/积分</span>
                </div>
                <div className="assets-arw">
                  <img src={right_arw}/>
                </div>
              </div>
              <div className="lyc-user-collection">
                <div className="collection-img">
                  <img src={collect}/>
                </div>
                <div className="collection-name">
                  <span>我的收藏</span>
                </div>
                <div className="collection-arw">
                  <img src={right_arw}/>
                </div>
              </div>
            </div>
            <div className="about-me-bootom">
              <div className="lyc-user-address">
                <div className="address-img">
                  <img src={address}/>
                </div>
                <div className="address-name">
                  <span>地址管理</span>
                </div>
                <div className="address-arw">
                  <img src={right_arw}/>
                </div>
              </div>
              <div className="lyc-user-news">
                <div className="news-img">
                  <img src={message}/>
                </div>
                <div className="news-name">
                  <span>消息中心</span>
                </div>
                <div className="news-arw">
                  <img src={right_arw}/>
                </div>
              </div>
              <div className="lyc-user-help">
                <div className="help-img">
                  <img src={feed}/>
                </div>
                <div className="help-name">
                  <span>帮助与反馈</span>
                </div>
                <div className="help-arw">
                  <img src={right_arw}/>
                </div>
              </div>
            </div>
          </div>
          <div className="lyc-user-quit">退出</div>
        </div>
      </div>
    )
  }
}