import React ,{ Component} from "react";
import Title from "../common/Title/Title";
import "./index.less"
export default class MainMore extends Component{
    render(){
        return(
            <div className="cwj-more-box">
                <Title title="更多商品"/>
                <div className="cwj-more">
                    <div className="more-img">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_5cc55210bad4a097f4a2f502099e4acf.jpeg" alt=""/>
                    </div>
                    <div className="more-info">
                            <span className="more-info-title">小米电视4C 43英寸 </span>
                            <span className="more-info-describe">人工智能 超窄边  全高清屏 钢琴烤漆 海量片源 </span>
                            <div className="more-info-activety">
                                <span>￥{1699}</span>
                                <span>直降</span>
                            </div>
                    </div>
                </div>
                <div className="cwj-more">
                    <div className="more-img">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_5cc55210bad4a097f4a2f502099e4acf.jpeg" alt=""/>
                    </div>
                    <div className="more-info">
                            <span className="more-info-title">小米电视4C 43英寸 </span>
                            <span className="more-info-describe">人工智能 超窄边  全高清屏 钢琴烤漆 海量片源 </span>
                            <div className="more-info-activety">
                                <span>￥{1699}</span>
                                <span>直降</span>
                            </div>
                    </div>
                </div>
                <div className="cwj-more">
                    <div className="more-img">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_5cc55210bad4a097f4a2f502099e4acf.jpeg" alt=""/>
                    </div>
                    <div className="more-info">
                            <span className="more-info-title">小米电视4C 43英寸 </span>
                            <span className="more-info-describe">人工智能 超窄边  全高清屏 钢琴烤漆 海量片源 </span>
                            <div className="more-info-activety">
                                <span>￥{1699}</span>
                                <span>直降</span>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}
