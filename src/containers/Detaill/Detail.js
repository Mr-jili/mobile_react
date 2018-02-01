import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/detail'
import './Detail.less'
import DetailHeader from "./DetailHeader";
import DetailAddress from "./DetailAddress";
import DetailEvaluate from "./DetailEvaluate";




class Detail extends React.Component {
   constructor(){
       super();
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
       // console.log(this.props.getDetailAPI('100907'));
       //  console.log(this.props.getEvaluate('100907'));
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
            <DetailHeader handBack={this.handBack}/>

            <DetailAddress/>

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

            <DetailEvaluate/>

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
export default withRouter(Detail)
// export default connect(state=>({...state.detail}),actions)(Detail);