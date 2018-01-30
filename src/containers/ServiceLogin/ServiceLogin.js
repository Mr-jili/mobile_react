import React from 'react';
import "./ServiceLogin.less";

import mi_logo from "../../images/mi_logo.jpg";

export default class ServiceLogin extends React.Component {
  render(){
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
                    <input type="text" placeholder="邮箱/手机号码/小米ID"/>
                  </li>
                  <li>
                    <input type="text" placeholder="密码"/>
                  </li>
                </ul>
              </div>
              <div className="login_phone">
                <input className="btn_login" type="submit" value="登录"/>
              </div>
              <div className="others_logo">
                <span className="phone_msg_log">
                  <a href="javascript:;">手机短信登录/注册</a>
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