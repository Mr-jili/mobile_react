import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/detail'
import './Detail.less'
// import {getCommodity} from '../../api/api'



class Detail extends React.Component {
   constructor(){
       super();
       this.state={
           list:{}
       };
   }

    componentWillMount(){
       // let list=this.props.location.state;
       // if(list){
       //     this.setState({list})
       // }else {
           // this.props.match.params.lessonId
           // let a=await getCommodity(222);
           // this.setState({list})
       // console.log(a);
       console.log(this.props.getDetailAPI('100907'));
   }






  handBack=()=>{
      this.props.history.goBack();
  };
  handHome=()=>{
      // console.log(this.props);
  };




  render(){

      return (
        <div className="main">
            <div className="detail clearfix">
                <div className="detail_top">
                    <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_35d097cc6105a0225bee01b612005c16.jpeg&w=1080&h=1270&w=1080&h=1270&crop=a_0_95_1080_1080&t=webp" alt=""/>
                    <div className='left'>
                        <span>限时购 ￥9999</span>
                    </div>
                    <div className="right">
                        <img src="https://static.home.mi.com/youpin/static/m/res/images/std_bigtrap_normal_rightArrow.png" alt=""/>
                        <span className="year">年货节</span>
                    </div>
                    <div className="shop">
                        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_679ccf34e5fbfe05a96557e4f1247890.png&w=320&h=320" alt=""/>
                    </div>
                </div>
                <div className='img1' onClick={this.handBack}> </div>
                <div className="img2" onClick={this.handHome}> </div>
            </div>

            <div className="detail_jieshao clearfix">
                <h4>小米NIX2 Unibody全陶瓷</h4>
                <p><span>【年货节特惠】</span>全面屏2.0，5.99"大屏 / 骁龙835旗舰处理器 / 4轴光学防抖 / 6模43频，全球频段 / 双ADC高清录音</p>
                <strong>¥3299起</strong>
            </div>

            <div className="detail_yixuan clearfix">
                <span>已选：<b>请选择颜色 型号 分类</b></span>
                <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_moreData.png" alt=""/>
            </div>

            <div className="detail_songzhi clearfix">
                <span>送至：<b>北京市海淀区</b></span>
                <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_moreData.png" alt=""/>
            </div>

            <div className="detail_shouhou clearfix">
                <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    有品甄选精品
                </span>
                <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    单笔满XXX元免运费
                    {/*150需做处理*/}
                </span>
                <span>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/promise_icon.png" alt=""/>
                    由 小米 发货并提供售后
                </span>
            </div>

            <div className="detail_xiaomi clearfix">
                <img src="http://static.home.mi.com/app/shop/img?id=shop_72bacf474dfad998341d995c6fcb9db1.jpg&t=jpeg" alt=""/>
                <p>小米自营产品</p>
                <span>为发烧而生</span>
            </div>

            <div className="detail_pingjia clearfix">
                <span>
                    用户评价(1777)
                    <b>97%满意 <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_right_arrow.png" alt=""/></b>
                </span>
            </div>

            <div className="detail_user clearfix">
                <ul>
                    <li>
                        <div className="user_outer">
                            <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01FmRF48sPx/Zp3v1owrnpnqdl.jpg" alt=""/>
                            <span className="span1">啦啦啦啦啦</span>
                            <span className="span2">2018.01.31 00:44</span>
                        </div>
                        <div className="p">
                            还好，不过没达到预期。
                        </div>
                        <div className="detail_hengxian"> </div>
                    </li>
                    <li>
                        <div className="user_outer">
                            <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01FmRF48sPx/Zp3v1owrnpnqdl.jpg" alt=""/>
                            <span className="span1">啦啦啦啦啦</span>
                            <span className="span2">2018.01.31 00:44</span>
                        </div>
                        <div className="p">
                            还好，不过没达到预期。
                        </div>
                        <div className="detail_hengxian"> </div>
                    </li>
                    <li>
                        <div className="user_outer">
                            <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01FmRF48sPx/Zp3v1owrnpnqdl.jpg" alt=""/>
                            <span className="span1">啦啦啦啦啦</span>
                            <span className="span2">2018.01.31 00:44</span>
                        </div>
                        <div className="p">
                            还好，不过没达到预期。
                        </div>
                        <div className="detail_hengxian"> </div>
                    </li>

                    <li>
                        <div className="user_outer">
                            <img src="https://s1.mi-img.com/mfsv2/avatar/s008/p01FmRF48sPx/Zp3v1owrnpnqdl.jpg" alt=""/>
                            <span className="span1">啦啦啦啦啦</span>
                            <span className="span2">2018.01.31 00:44</span>
                        </div>
                        <div className="p">
                            还好，不过没达到预期。
                        </div>
                        <div className="detail_hengxian"> </div>
                    </li>
                </ul>
            </div>

            <ul className="detail_route">
                <li>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_detail_unfavor_v2.png" alt=""/>
                    <span>收藏</span>
                </li>
                <li>
                    <img src="https://static.home.mi.com/youpin/static/m/res/images/shop_cart.png" alt=""/>
                    <span>购物车</span>
                </li>
                <li>
                    <span>立即购买</span>
                </li>
                <li>
                    <span>计入购物车</span>
                </li>
            </ul>
        </div>
    )
  }
}

// export default withRouter(Detail)
export default connect(state=>({...state.detail}),actions)(Detail);