import React from 'react';
import './Pay.less'
import Header from '../../components/Header/Header'
import PayFooter from './PayFooter'
import right_arrow from '../../images/device_shop_right_arrow.png'
import unselect from '../../images/unselect.png'
import pay_alipay from '../../images/pay_alipay.png'
import pay_mipay from '../../images/pay_mipay.png'
import checkbox from '../../images/std_icon_checkbox_check.png'
import xiaomi from '../../images/img.jpg'
import Bar from './Bar'
import BarThick from './BarThick'


export default class Pay extends React.Component {
  render() {
    return (
      <div className="pay-container">
        <Header back={true}>确认信息</Header>
        <div className="content">
          <div className="address">
            <span>没有地址信息，请点击后添加地址</span>
            <img src={right_arrow} alt=""/>
          </div>
          <BarThick/>
          <div className="pay-method">
            <div className="method">
              <div className="logo">
                <img src={pay_alipay} alt=""/>
                <span>支付宝</span>
              </div>
              <img src={unselect} alt="" className="checkbox"/>
            </div>
            <Bar/>
            <div className="method">
              <div className="logo">
                <img src={pay_mipay} alt="" className="pay"/>
                <span>小米钱包</span>
              </div>
              <img src={checkbox} alt="" className="checkbox"/>
            </div>
          </div>
          <BarThick/>
          <div className="goods">
            <div className="goods-title">
              <img src={xiaomi} alt=""/>
              <p>小米</p>
            </div>
            <Bar/>
            <div className="goods-body">
              <div className="item">
                <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_f343f65c597a0368e3a59e4ddbd29e4c.jpeg" alt=""/>
                <div>
                  <p>小米MIX2 全网通版 6GB内存 黑色陶瓷 64GB</p>
                  <div>
                    <p>￥2999</p>
                    <p>× 1</p>
                  </div>
                </div>
              </div>
              <Bar/>
              <div className="item">
                <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_64f8e26356091ca3c08e5f53e6dd3d5c.jpeg" alt=""/>
                <div>
                  <p>小米6 全网通版 4GB内存 亮黑色 64GB</p>
                  <div>
                    <p>￥2199</p>
                    <p>× 1</p>
                  </div>
                </div>
              </div>
              <Bar/>
              <div className="item">
                <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_5660d72bee94f0650329777d5ca4cb27.jpeg" alt=""/>
                <div>
                  <p>[赠品]小米6 标准高透膜</p>
                  <div>
                    <p>￥0</p>
                    <p>× 1</p>
                  </div>
                </div>
              </div>
              <Bar/>

            </div>
            <div className="goods-footer">
              <div className="msg">
                <label>买家留言</label>
                <input type="text" placeholder="选填、30字以内"/>
              </div>
              <Bar/>
              <div className="xiaoji">
                <div className="youfei">
                  <p>邮费:0.00元</p>
                </div>
                <div className="">
                  <p>共3件商品，小计:<span>5298元</span></p>
                </div>
              </div>
            </div>
          </div>
          <BarThick/>
          <div className="other-info">
            <div className="youhui">
              <p>优惠券/优惠码</p>
              <img src={right_arrow} alt=""/>
            </div>
            <Bar/>
            <div className="peisong">
              <p>配送方式</p>
              <p>快速配送</p>
            </div>
            <Bar/>
            <div className="fapiao">
              <p>发票类型</p>
              <div>
                <p>个人电子发票</p>
                <img src={right_arrow}  alt=""/>
              </div>
            </div>
          </div>
          <BarThick/>
          <div className="total">
            <div className="item">
              <p>商品总价</p>
              <p>￥5189.00</p>
            </div>
            <Bar/>
            <div className="item">
              <p>运费</p>
              <p>+￥0.00</p>
            </div>
            <Bar/>
            <div className="item">
              <p>优惠</p>
              <p>-￥0.00</p>
            </div>
          </div>

        </div>
        <PayFooter></PayFooter>
      </div>
    )
  }
}