import React ,{ Component} from "react";
import Title from "../common/Title/Title";
import "./index.less"
import * as axiosData from "../../../api/api";
export default class MainMore extends Component{
    render(){
        let axiosData =this.props.allData;
        return(
            <div className="cwj-more-box">
                <Title title="更多商品"/>
                {
                    axiosData.map((item,index)=>(
                        <div className="cwj-more"  key={index}>
                            <div className="more-img">
                                <img src={item.url} alt=""/>
                            </div>
                            <div className="more-info">
                                <span className="more-info-title">{item.title}  </span>
                                <span className="more-info-describe">{item.describe}  </span>
                                <div className="more-info-activety">
                                    <span>￥{item.price} </span>
                                    <span>直降</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
