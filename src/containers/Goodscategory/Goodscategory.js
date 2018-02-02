import React from 'react';
import './Goodscategory.less'
import icon_search from '../../images/home_search.png'
import {connect} from 'react-redux';
import actions from '../../store/actions/goodscategory'
import Banner from "./Banner";
import Items from "./Items";
// import {withRouter} from 'react-router-dom'

class Goodscategory extends React.Component {
  constructor(){
    super();
    this.state={currentId:"G0001"};
  }

  componentDidMount() {
    //如果没数据开始请求
    if(this.props.listLink.length === 0){
      this.props.getGoodsDataAPI();
    }
    //页面跳转或刷新后需要显示第一个分类的数据
    this.props.getLevelDataAPI("G0001");
  }

  handleNavClick(id){
    this.setState({currentId:id});
    this.props.getLevelDataAPI(id);
  }
  render() {
    let {listLink,banner,data} = this.props;
    return (
      <div className="container">
        <div className="g-header">
          <div className="search" onClick={()=>{
            this.props.history.push('/search')
          }}>
            <img src={icon_search}/>
            <span>年货嗨抢，最高直降1000</span>
          </div>
        </div>
        <div className="g-body">
          <div className="nav">
            <ul>
              {listLink.map((item, index) => (
                <li key={index} className={this.state.currentId===item.id?"current":""} onClick={()=>{this.handleNavClick(item.id)}}>{item.linkName}</li>
              ))}
            </ul>
          </div>
          <div className="content">
            <Banner banner={banner} id={this.state.currentId}/>
            <Items id={this.state.currentId} data={data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({...state.goodscategory}), actions)(Goodscategory);