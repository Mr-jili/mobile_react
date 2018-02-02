import React from 'react';
import './PayPassword.less'
export default class PayPassword extends React.Component{
  render(){
    return (
      <div className="pay-password-container">
        <p className="title">使用小米白条（不分期）支付</p>
        <p className="price">549.00<span>元</span></p>
        <div className="password">
          <div><span className="istrue"></span></div>
          <div><span className="istrue"></span></div>
          <div><span className="istrue"></span></div>
          <div><span className="istrue"></span></div>
          <div><span className="istrue"></span></div>
          <div><span className="istrue"></span></div>
        </div>
        <a className="forget">忘记密码？</a>
        <a className="yijian">意见反馈</a>
        <p className="footer">- 由小米科技提供技术支持 -</p>
      </div>
    )
  }
}