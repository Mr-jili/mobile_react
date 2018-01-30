import React ,{ Component} from "react";
import "./index.less";
export default class TwoRow extends Component{
    render(){
        return(
            <div className="two-row-box">
                <div className='two-row'>
                    <img
                        src="https://shop.io.mi-img.com/app/shop/img?id=shop_4c4da4b33a2d47188a1948a5e1f3826a.jpeg&w=540&h=420&t=webp"
                        alt="3"/>
                </div>
                <div className='two-row'>
                    <img
                        src="https://shop.io.mi-img.com/app/shop/img?id=shop_01624217b54596aa2690e718ec7ff711.jpeg&w=540&h=420&t=webp"
                        alt="4"/>
                </div>
            </div>
        )
    }
}
