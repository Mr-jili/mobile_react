import React,{Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions/detail/isDetailLogin'



class DetailBottom extends Component{
    constructor(){
        super();
        this.state={
            color:false
        }
    }
      async componentDidMount(){
        this.props.getValidateAPI();
        this.props.getCollection('700');
        await this.props.getDetailCollLen();
        // console.log(this.props.match.params);
        // this.props.getDetailCart('700');
    }

    handLi1=()=>{
        this.props.isLogin(this.props.detailList.err,this.props.detailList.user);
        this.props.getCollection('700',1);
    };

    handLi2=()=>{
        this.props.isLogin(this.props.detailList.err,this.props.detailList.user);
        this.props.loginTrue1(this.props.detailList.err,this.props.detailList.user);
    };

    handLi3=()=>{
        this.props.isLogin(this.props.detailList.err,this.props.detailList.user);
        this.props.loginTrue2(this.props.detailList.err,this.props.detailList.user);
    };

    handLi4=()=>{
        this.props.isLogin(this.props.detailList.err,this.props.detailList.user);
        this.props.getDetailCart('700');
        let art1=this.refs.art1;
        clearTimeout(this.$timer1);
        this.$timer1=setTimeout(()=>{
            art1.style.display='block';
        },1000);
        clearTimeout(this.$timer2);
        this.$timer2=setTimeout(()=>{
            art1.style.display='none';
        },2000)
    };
    render(){
        return (
            <div>

                <ul className="detail_route" >
                    <div className="DetailCart" ref="art1" style={{display:'none'}}>添加成功~~</div>
                    <li onClick={this.handLi1}>
                        {this.props.collectList.collState.collState?<img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_detail_favor_v2.png" alt=""/>
                            :<img src="https://static.home.mi.com/youpin/static/m/res/images/device_shop_detail_unfavor_v2.png" alt=""/>
                        }
                        <span style={this.props.collectList.collState.collState?{color:"#f00"}:{color:"#7a7a7a"}}>收藏</span>
                    </li>
                    <li onClick={this.handLi2}>
                        <i className="collLength">{this.props.detailCollLen.collLength}</i>
                        <img src="https://static.home.mi.com/youpin/static/m/res/images/shop_cart.png" alt=""/>
                        <span>购物车</span>
                    </li>
                    <li onClick={this.handLi3}>
                        <span>立即购买</span>
                    </li>
                    <li onClick={this.handLi4}>
                        <span>加入购物车</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect((state)=>({...state.isDetail}),actions)(DetailBottom)