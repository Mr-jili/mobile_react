import React from 'react';
import './PayPassword.less'
import actions from '../../store/actions/pay'
import {connect}  from 'react-redux'
import {verPayPassword} from '../../api/api'
import Dialog from './Dialog'

class PayPassword extends React.Component{
  async componentDidMount(){
    await this.props.getPayListPassWordAPI()
  }

  handleChange=(e)=>{
    if(e.target.value.length===6){
      verPayPassword(e.target.value).then((result)=>{
        console.log(result);
        if(result.successCode === 0){
          setTimeout(()=> {
            alert("支付成功！");
            this.props.history.push('/orderlist');
          },3000)
        } else {
          alert("支付失败,请重新输入密码！");
          this.refs.password.value=""
        }
      });
    }

  };

  render(){
    return (<div>
        <div className="pay-password-container">
          <p className="title">使用小米白条（不分期）支付</p>
          <p className="price">{this.props.totalparice}<span>元</span></p>
          {/*<div className="password">*/}
          <input type="password" className="password"  maxLength="6"
                 onChange={(e)=>{this.handleChange(e)}}
                 ref="password"/>
          {/*</div>*/}
          {/*<div className="password1">*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*<div><span className="istrue"></span></div>*/}
          {/*</div>*/}
          <a className="forget">忘记密码？</a>
          <a className="yijian">意见反馈</a>
          <p className="footer">- 由小米科技提供技术支持 -</p>
        </div>
      </div>

    )
  }
}

export default connect(state => ({...state.pay}), actions)(PayPassword)