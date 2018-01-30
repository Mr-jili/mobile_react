import React, {Component} from "react"

export default class Goods extends Component {
    render() {
        return (
          <div className="wj-goods">
            <ul>
              <li className="wj-goods-list">
                {/*头部*/}
                <div className="wj-goods-top">
                  <img src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <h6>成都趣睡科技有限公司</h6>
                  <div className="wj-goods-free-shipp">
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png" alt=""/>
                    <span>免运费</span>
                  </div>
                </div>
                {/*商品内容*/}
                <div className="wj-goods-bot">
                  <img className="icon"
                       src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <div className="wj-goods-products">
                    <div className="wj-goods-l">
                      <img
                        src="https://static.home.mi.com/app/shop/img?id=shop_e9e788dc46eb16bc358ccefc221e6a72.jpeg&w=240&h=240"
                        alt=""/>
                    </div>
                    <div className="wj-goods-r">
                      <p className="wj-goods-til">8H枕套8H乳胶枕Z1 内外双枕套-混米色</p>
                      <p className="wj-goods-mintotal">小计：79.00元</p>
                      <div className="wj-goods-pricebar">
                        <div className="wj-goods-price">￥<span>79</span></div>
                        <div className="wj-goods-price-btn">
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_minus_disable.png"
                            alt=""/>
                          <span>1</span>
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_plus_enable.png"
                            alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="wj-goods-list">
                {/*头部*/}
                <div className="wj-goods-top">
                  <img src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <h6>成都趣睡科技有限公司</h6>
                  <div className="wj-goods-free-shipp">
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/icon_cart_post.png" alt=""/>
                    <span>免运费</span>
                  </div>
                </div>
                {/*商品内容*/}
                <div className="wj-goods-bot">
                  <img className="icon"
                       src="https://static.home.mi.com/youpin/static/m/res/images/std_icon_checkbox_check.png"
                       alt=""/>
                  <div className="wj-goods-products">
                    <div className="wj-goods-l">
                      <img
                        src="https://static.home.mi.com/app/shop/img?id=shop_e9e788dc46eb16bc358ccefc221e6a72.jpeg&w=240&h=240"
                        alt=""/>
                    </div>
                    <div className="wj-goods-r">
                      <p className="wj-goods-til">8H枕套8H乳胶枕Z1 内外双枕套-混米色</p>
                      <p className="wj-goods-mintotal">小计：79.00元</p>
                      <div className="wj-goods-pricebar">
                        <div className="wj-goods-price">￥<span>79</span></div>
                        <div className="wj-goods-price-btn">
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_minus_disable.png"
                            alt=""/>
                          <span>1</span>
                          <img
                            src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_cart_count_plus_enable.png"
                            alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )
    }
}