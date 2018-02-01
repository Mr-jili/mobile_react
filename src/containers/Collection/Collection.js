import React, {Component} from "react";
import Header from "../../components/Header/Header";
import "./index.less";
import {Link} from "react-router-dom"

export default class Collection extends Component {
    render() {
        return (
            <div className="cwj-collection-box">
                <Header back={true}>
                    我的收藏
                </Header>
                <div className="collection-box">


                    {/*1*/}

                    <div className="collection-box-view">
                        <img src="https://static.home.mi.com/youpin/static/m/res/images/std_shop_details_icon_wrong.png"/>
                        <span>亲您还没有收藏的商品哦！</span>
                        <div className="collection-box-look">
                            <Link  className="react-view" to="/">
                             去逛逛
                            </Link>
                        </div>
                    </div>


                    {/*1*/}

                </div>
            </div>
        )
    }
}
