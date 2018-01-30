import React, {Component} from "react";
import "./index.less";
import Title from "../common/Title/Title";
import TRow from "../common/TRow/TRow";
import ThreeRow from "../common/ThreeRow/ThreeRow";

export default class MainHot extends Component {
    render() {
        return (
            <div className='cwj-main-hot-box'>
                <Title title="热门"/>
                <TRow title="鹿客智能指纹锁Classic" price="199"/>
                <ThreeRow  title="鹿客智能指纹锁Classic" price="199"/>
            </div>
        )
    }
}
