import React from 'react';
import "./Main.less";
import MainHeader from "./MainHeader/MainHeader";
import MainSlider from "./MainSlider/MainSlider";
import MainLink from "./MainLink/MainLink";
import MainRecommend from "./MainRecommend/MainRecommend";
import MainCrowdfunding from "./MainCrowdfunding/MainCrowdfunding";
import MainHot from "./MainHot/MainHot";
import NewGoogs from "./NewGoods/NewGoogs";
import TimeBuy from "./TimeBuy/TimeBuy";
import MainBrand from "./MainBrand/MainBrand";
import MainPhone from "./MainPhone/MainPhone";
import MainMore from "./MainMore/MainMore";
import MainFooter from "./MainFooter/MainFooter";

export default class Main extends React.Component {
  render(){
    return (
      <div className="main-box">
          <MainHeader/>
          <MainSlider/>
          <MainLink/>
          <MainRecommend/>
          <MainCrowdfunding/>
          <MainHot/>
          <NewGoogs/>
          <TimeBuy/>
          <MainBrand/>
          <MainPhone/>
          <MainMore/>
          <MainFooter/>
      </div>
    )
  }
}