import React ,{ Component} from "react";
import Header from "../../components/Header/Header";
import "./index.less";

export default class Collection extends Component{
    render(){
        return(
            <div>
                <Header>我的收藏</Header>
                <div className="cwj-collection-box">

                </div>
            </div>
        )
    }
}
