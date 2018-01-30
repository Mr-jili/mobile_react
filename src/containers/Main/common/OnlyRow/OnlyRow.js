import React, {Component} from "react";
import "./index.less";
export default class OnlyRow extends Component {
    render() {
        return (
            <div className="cwj-only-box">
                <div className="only-img">
                    <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_62773943138697b231f77971e210df17.jpeg&w=1080&h=420&t=webp" alt=""/>
                    <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_acbd8624ea4eb6bf09ba424ac2a82049.png&w=1080&h=546&t=webp" alt=""/>
                </div>
                <div className="t-row-text">
                    <p className="row-title">
                        {"圈厨多功能家用电火锅"}
                    </p>
                    <p className="row-alt">
                        {"360°环形加热，1500W大功率，食品级不沾涂层，4L大容量"}
                    </p>
                    <span className="row-price">
                          ￥{29}
                             </span>

                </div>

            </div>
        )
    }
}
