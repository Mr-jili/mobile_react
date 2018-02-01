import React,{Component} from 'react'
export default class DetailAddress extends Component{
    render(){
        return (
            <div>
                <div className="detail_yixuan clearfix">
                    <span>已选：<b>请选择颜色 型号 分类</b></span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_moreData.png" alt=""/>
                </div>

                <div className="detail_songzhi clearfix">
                    <span>送至：<b>北京市海淀区</b></span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_moreData.png" alt=""/>
                </div>

                <div className="detail_shouhou clearfix">
                <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    有品甄选精品
                </span>
                    <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    单笔满XXX元免运费
                        {/*150需做处理*/}
                </span>
                    <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    由 小米 发货并提供售后
                </span>
                </div>
            </div>
        )
    }
}