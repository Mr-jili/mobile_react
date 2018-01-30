import React, {Component} from 'react';
import "./ServiceRegister.less";

import mi_logo from "../../images/mi_logo.jpg";

export default class ServiceRegister extends Component {
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
                  <input type="text" className="phone-count" placeholder="手机号码"/>
                </div>
                <div className="pwd-panel">
                  <div className="check-numBox">
                    <input type="text" className="check-num" placeholder="短信验证码"/>
                  </div>
                  <div className="get-num">
                    <a href="javascript:;">获取验证码</a>
                  </div>
                </div>

                {/*<ul className="user-input-list">
                  <li>
                    <span>+86</span>
                    <input type="text" placeholder="手机号码"/>
                  </li>
                  <li>
                    <input type="text" placeholder="短信验证码"/>
                  </li>
                </ul>*/}
              </div>
              <div className="login_phone">
                <input className="btn_login" type="submit" value="立即登录/注册"/>
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