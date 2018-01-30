import React, {Component} from "react";
import "./index.less";
import Title from "../common/Title/Title";
import TRow from "../common/TRow/TRow";

export default class MainCrowdfunding extends Component {
    render() {
        return (
            <div className="cwj-crowd-funding-box">
                <Title title="小米众筹"/>
                <TRow price="99" title={"LuckyME 金元宝贺岁红包"}/>
                <div className="crowd-funding-footer">
                    <div className="statistical">
                        <span><i>24698</i>人参与</span>
                        <span>爆</span>
                        <span><i>1234%</i></span>
                    </div>
                    <div className="statistical">
                        <span><i>24698</i>人参与</span>
                        <span>爆</span>
                        <span><i>1234%</i></span>
                    </div>
                </div>
            </div>
        )
    }
}
