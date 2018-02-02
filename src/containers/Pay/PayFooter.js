import React from 'react';
export default class PayFooter extends React.Component{
  render(){
    return (
      <div className="footer">
        <div className="total">
          <span>合计:</span>
          <span>￥5298</span>
        </div>
        <div className="paybtn">
          <span>去支付</span>
        </div>
      </div>
    )
  }
}