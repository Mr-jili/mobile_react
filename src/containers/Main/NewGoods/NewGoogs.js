import React ,{ Component} from "react";
import OnlyRow from "../common/OnlyRow/OnlyRow";
import ThreeRow from "../common/ThreeRow/ThreeRow";
import Title from "../common/Title/Title";
export default class NewGoogs extends Component{
    render(){
        return(
            <div>
                <Title title="新品"/>
                <OnlyRow/>
                <ThreeRow/>
            </div>
        )
    }
}
