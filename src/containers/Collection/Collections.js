import React ,{ Component} from "react";
import Header from "../../components/Header/Header";
import "./index.less";
import {Link} from "react-router-dom"
export default class Collections extends Component{
    render(){
        return(
            <div className="cwj-collection-box">
                <Header back={true}>
                    我的收藏
                </Header>
                <div className="collection-has-data" style={{fontSize:"12px"}}>
                   <div className="goods-container">
                       <Link className="goods-wrrap" to={{pathname:"/detail/100748"}}>
                           <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_1e2ccb6936c3315ba1318e5ec5501ff2.jpeg" alt=""/>
                           <div className="goods-text-box">
                               <span className="goods-title">{"小米6"}</span>
                               <span className="goods-price">￥{"2199"}</span>
                           </div>
                           <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/>
                       </Link>

                   </div>
                </div>
            </div>
        )
    }
}
