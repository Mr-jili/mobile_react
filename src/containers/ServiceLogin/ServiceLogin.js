import React from 'react';
import "./ServiceLogin.less";
import {connect} from "react-redux";
import actions from "../../store/actions/login";
import mi_logo from "../../images/mi_logo.jpg";
import {withRouter,Link} from "react-router-dom";

class ServiceLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      login_tipAry: [
        "请输入用户名~~",
        "手机号码格式不正确~~",
        "请输入密码~~",
        "用户名或者密码不正确~~"
      ]
    }
  }

  handleClick = () => {
    let reg = /^1\d{10}$/;
    let $box = this.dialogBox;
    let $user = this.userna.value;
    let $psw = this.psw.value;
    let $phoneTips = this.loginTips;

    if ($user === "") {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[0];//手机未输入提示错误信息
      return;
    }

    if (!reg.test($user)) {//验证手机号，不匹配出现相应提示
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[1];
      return;
    }

    if ($user !== "" && $psw === "") {//手机号已经输入但是密码未输入
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[2];
      return;
    }

    //判断用户名和密码
    let {username, password} = this.props.login;
    if ($user !== username || $psw !== password) {
      $box.style.display = "flex";
      $phoneTips.innerHTML = this.state.login_tipAry[3];
      return;
    }

    this.props.toLoginAPI(this.userna.value, this.psw.value, this.props.history);
  };

  //用户名一旦输入相应提示信息消失
  handleInputUser = (e) => {
    let $box = this.dialogBox;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

  //密码一旦输入相应提示消失
  handlePsw = (e) => {
    let $box = this.dialogBox;
    let val = e.target.value;

    if (val !== "") {
      $box.style.display = "none";
    }
  };

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
              <div className="user-input">
                <ul className="user-input-list">
                  <li>
                    <input type="text" placeholder="邮箱/手机号码/小米ID" ref={x => this.userna = x}
                           onKeyUp={this.handleInputUser}/>
                  </li>
                  <li>
                    <input type="password" placeholder="密码" ref={x => this.psw = x} onKeyUp={this.handlePsw}/>
                  </li>
                </ul>
              </div>

              <div className="login-dialog" ref={x => this.dialogBox = x}>
                <div className="login-logo">!</div>
                <p className="login-tit" ref={x => this.loginTips = x}></p>
              </div>

              <div className="login_phone">
                <button className="btn_login" onClick={this.handleClick}>登录
                </button>
              </div>
              <div className="others_logo">
                <span className="phone_msg_log">
                  <Link to={"/register"}>手机短信登录/注册</Link>
                </span>
                <div className="others-tit">
                  <span>其他登录方式</span>
                </div>
                <div className="others-link">
                  <i className="iconfont icon-qq"></i>
                  <i className="iconfont icon-weibo"></i>
                  <i className="iconfont icon-unie654"></i>
                </div>
                <div className="n-links-area">
                  <a href="javascript:;">立即注册</a>
                  <a href="javascript:;">忘记密码?</a>
                </div>
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

export default withRouter(connect(state => ({...state}), actions)(ServiceLogin));