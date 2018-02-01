import React,{Component} from 'react'
export default class DetailHeader extends Component{
    render(){
        return (
            <div>
                <div className="detail clearfix">
                    <div className="detail_top">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_35d097cc6105a0225bee01b612005c16.jpeg&w=1080&h=1270&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" alt=""/>
                        <div className='left'>
                            <span>限时购 ￥9999</span>
                        </div>
                        <div className="right">
                            <img src="https://static.home.mi.com/youpin/static/m/res/images/std_bigtrap_normal_rightArrow.png" alt=""/>
                            <span className="year">年货节</span>
                        </div>
                        <div className="shop">
                            <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_679ccf34e5fbfe05a96557e4f1247890.png&w=320&h=320" alt=""/>
                        </div>
                    </div>
                    <div className='img1' onClick={this.props.handBack}> </div>
                    <div className="img2" onClick={this.props.handHome}> </div>
                </div>

                <div className="detail_jieshao clearfix">
                    <h4>小米NIX2 Unibody全陶瓷</h4>
                    <p><span>【年货节特惠】</span>全面屏2.0，5.99"大屏 / 骁龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段 / 双ADC高清录音</p>
                    <strong>¥3299起</strong>
                </div>
            </div>
        )
    }
}