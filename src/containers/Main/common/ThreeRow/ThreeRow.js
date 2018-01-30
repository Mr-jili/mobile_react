import React, {Component} from "react";
import "./index.less";

export default class ThreeRow extends Component {
    render() {
        return (
            <div className="three-row-box">
                <div className='three-row'>
                    <img
                        src="https://shop.io.mi-img.com/app/shop/img?id=shop_981a33087adfcf321882fa94af7e3dc9.jpeg&w=540&h=846&t=webp"
                        alt=""/>
                    <div className="t-row-text">
                        <p className="row-title">
                            {this.props.title}
                        </p>
                        <p className="row-alt">
                            头层牛皮鞋身鞋里，亲肤吸汗透气防臭
                        </p>
                        <span className="row-price">
                          ￥{this.props.price}
                             </span>

                    </div>
                </div>
                <div className='three-row'>
                    <div className='row-tool'>
                        <img alt="1"
                             src="https://shop.io.mi-img.com/app/shop/img?id=shop_dc4955a7f668f79135bf689005746475.png&w=537&h=426,https://shop.io.mi-img.com/app/shop/img?id=shop_1d26c4fec9f7de43e090f5058a6532b2.png&w=540&h=420&t=webp"/>
                        <div className="t-row-text">
                            <p className="row-title">
                                {this.props.title}
                            </p>
                            <span className="row-price">
                            ￥{this.props.price}
                            </span>

                        </div>
                    </div>
                    <div className='row-tool'>
                        <img alt="1"
                             src="https://shop.io.mi-img.com/app/shop/img?id=shop_dc4955a7f668f79135bf689005746475.png&w=537&h=426,https://shop.io.mi-img.com/app/shop/img?id=shop_1d26c4fec9f7de43e090f5058a6532b2.png&w=540&h=420&t=webp"/>
                        <div className="t-row-text">
                            <p className="row-title">
                                {this.props.title}
                            </p>
                            <span className="row-price">
                          ￥{this.props.price}
                             </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
