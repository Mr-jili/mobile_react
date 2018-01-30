import React, {Component} from "react";
import "./index.less";
import Title from "../common/Title/Title";
import TwoRow from "../common/TwoRow/TwoRow";

export default class MainRecommend extends Component {
    render() {
        return (
            <div className="cwj-recommend-box">
                {/*头部*/}
                <Title title="有品推荐"/>
                {/**/}
                <div className='recommend-body'>
                    <div className='only-box'>
                        <img
                            src="https://shop.io.mi-img.com/app/shop/img?id=shop_a3e35bf7c90155633be7e2e588c57790.jpeg&w=1080&h=420&t=webp"
                            alt="1"/>
                        <img className="tmd"
                            src="https://shop.io.mi-img.com/app/shop/img?id=shop_b7a0f657766888c5b1df944c765ec764.png&w=1080&h=546&t=webp"
                            alt="2"/>
                    </div>
                </div>
                <TwoRow/>

            </div>
        )
    }
}
