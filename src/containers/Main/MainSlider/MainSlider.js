import React, {Component} from "react";
import {Carousel} from 'antd';
import "./index.less";

export default class MainSlider extends Component {
    render() {
        return (
            <div className="cwj-slider-box">
                <Carousel autoplay dots={false}>
                    <div><img className='slider-img'
                              src='https://shop.io.mi-img.com/app/shop/img?id=shop_9334c3fd5811978f84fe7035ae54b00d.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp'
                              alt="1"/>
                    </div>
                    <div><img className='slider-img'
                              src='https://shop.io.mi-img.com/app/shop/img?id=shop_a1e493684d4b9a60d2c4445e95960c81.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp'
                              alt="1"/>
                    </div>
                    <div><img className='slider-img'
                              src='https://shop.io.mi-img.com/app/shop/img?id=shop_60cbb2e6557262a448d14cd348cdd5f9.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp'
                              alt="1"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}
