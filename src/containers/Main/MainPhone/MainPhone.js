import React ,{ Component} from "react";
import "./index.less";
import Title from "../common/Title/Title";
import OnlyRow from "../common/OnlyRow/OnlyRow";
import CWJ from "../common/CWJ/CWJ";
export default class MainPhone extends Component{
    render(){
        return(
            <div className="cwj-Phone-box">
                <Title title={"手机"}/>
                <OnlyRow/>
                <CWJ/>
            </div>
        )
    }
}
