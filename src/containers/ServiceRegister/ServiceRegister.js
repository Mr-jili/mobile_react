import React, {Component} from 'react';
import "./ServiceRegister.less";
import {connect} from "react-redux";
import actions from "../../store/actions/register";

import mi_logo from "../../images/mi_logo.jpg";

class ServiceRegister extends Component {
  constructor() {
    super();
    this.state = {
      tipsAry: [
        "请输入手机号码~~",
        "手机号码格式不正确~~",
        "请输入短信验证码~~",
        "短信验证码不正确~~"
      ]
    }
  }

  //检查手机号和验证码的状态
  handleClick = () => {
    let reg = /^1\d{10}$/;
    let $box = this.box;
    let $phoneNum = this.mobile.value;
    let $checkNum = this.checkNum.value;
    let $phoneTips = this.tips;

    if ($phoneNum === "") {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[0];//手机未输入提示错误信息
      return;
    }

    if (!reg.test($phoneNum)) {//验证手机号，不匹配出现相应提示
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[1];
      return;
    }

    if ($phoneNum !== "" && $checkNum === "") {//手机号已经输入但是验证码未输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[2];
      return;
    }
  };

  //手机号码一旦输入相应提示信息消失
  handleInputPhoneNum = (e) => {
    let $box = this.box;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  //点击获取验证码，并且进入倒计时读秒状态
  getCheckNum = () => {
    let reg = /^1\d{10}$/;
    let $phoneNum = this.mobile.value;
    let $box = this.box;
    let $phoneTips = this.tips;

    if(!reg.test($phoneNum)){
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.tipsAry[1];
      return;
    }
    let $sendBtn= this.sendBtn;
    this.timerBack();
    if($sendBtn.innerHTML==="重新发送"){
      this.timerBack();
    }
  };
  //实现倒计时
  timerBack=()=>{
    let $sendBtn= this.sendBtn;
    let time=10;
    clearInterval(this.sendTimer);
    this.sendTimer=setInterval(()=>{
      time=time-1;
      $sendBtn.setAttribute("disabled",true);//不可点击
      $sendBtn.style.color="#ccc";
      $sendBtn.innerHTML=`重新发送(${time})`;
      if(time==0){
        clearInterval(this.sendTimer);
        $sendBtn.removeAttribute("disabled");//可点击
        $sendBtn.style.color="#003ab5";
        $sendBtn.innerHTML=`重新发送`;
      }
    },1000);
  };


  //验证码一旦输入相应提示消失
  handleCheckNum = (e) => {
    let $box = this.box;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="lyc-user-layout">
        <div className="user-layout-panel">
          <div className="user-layout">
            <div className="mi-logo">
              <div className="header-logoBox">
                <div className="custom-logo">
                  <img src={mi_logo}/>
                </div>
                <h4 className="header-tit">小米帐号登录</h4>
              </div>
              <div className="user-register-input">
                <div className="region-core">
                  <div className="city-list">
                    <span>+86</span>
                  </div>
                  <input type="text" className="phone-count" placeholder="手机号码" ref={x => this.mobile = x}
                         onKeyUp={this.handleInputPhoneNum}/>
                </div>
                <div className="pwd-panel">
                  <div className="check-numBox">
                    <input type="text" className="check-num" placeholder="短信验证码" ref={x => this.checkNum = x}
                           onKeyUp={this.handleCheckNum}/>
                  </div>
                  <div className="get-num">
                    <a href="javascript:;" onClick={this.getCheckNum} ref={x=>this.sendBtn=x}>获取验证码</a>
                  </div>
                </div>
              </div>
              <div className="phone-dialog" ref={x => this.box = x}>
                <div className="dialog-logo">!</div>
                <p className="dialog-tit" ref={x => this.tips = x}></p>
              </div>
              <div className="login_phone">
                <input className="btn_login" type="submit" value="立即登录/注册" onClick={this.handleClick}/>
              </div>
              <div className="others_logo">
                <span className="phone_msg_log">
                  <a href="javascript:;">用户密码登录</a>
                </span>
                <div className="others-tit">
                  <span>其他登录方式</span>
                </div>
                <div className="others-link">
                  <i className="iconfont icon-qq"></i>
                  <i className="iconfont icon-weibo"></i>
                  <i className="iconfont icon-unie654"></i>
                </div>
                {/*<div className="n-links-area">
                  <a href="javascript:;">立即注册</a>
                  <a href="javascript:;">忘记密码?</a>
                </div>*/}
                <div className="language">
                  <span>简体</span>|<span>繁体</span>|<span>English</span>|<span>常见问题</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({...state}), actions)(ServiceRegister)