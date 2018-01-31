import React from 'react';
import actions from '../../store/actions/JL/savour'
import {connect} from 'react-redux'
import './Savour.less'
import {ajax} from '../Savour/util'
import Header from '../../components/Header/Header'
import SavourText from "./SavourText";
import SavourLoading from './SavourLoading'

class Savour extends React.Component {
    constructor(){
        super();
    }
     getData=()=>{
         let offset = this.props.mySavour.list.length;
         let limit = 5;
         let old = this.props.mySavour.list;
         ajax({
             url:'http://localhost:9999/savour',
             method:'POST',
             data:{
                 offset,
                 limit
             }
         }).then((val)=>{
             let {hasMore,savour}=val;
             this.props.getSavour(old,savour);
         });
         this.loadMore();

     };
    componentDidMount(){

        this.getData();
    }

    loadMore=()=>{
        let ele=this.refs.mainSavour;
        ele.addEventListener('scroll',(e)=>{
            clearTimeout(this.$timer);
            this.$timer = setTimeout(() => {
                let {scrollTop, scrollHeight, offsetHeight} = e.target;
                let {hasMore,isLoad} = this.props.mySavour;
                if (scrollTop + offsetHeight + 50 >= scrollHeight) {
                    if (!hasMore||isLoad) {
                        console.log(hasMore, isLoad);
                        this.getData()
                    }
                }
            },30)
        },false)
    };


    render(){
        return (
      <div className="savour_main" ref="mainSavour">
          <Header back={false}>品味</Header>
          {/*{console.log(this.props.mySavour.isLoad)}*/}
          <SavourText lists={this.props.mySavour.list}/>
          {/*{this.props.mySavour.isLoad?:<SavourLoading/>}*/}

              {/*<ul className="savour_container"  style={{marginTop:'45px'}}>*/}
                  {/*{this.props.mySavour.list.map((item,index)=>(*/}
                          {/*<li key={index}>*/}
                          {/*<img src={item.pic_url} alt=""/>*/}
                          {/*<span>{item.title}</span>*/}
                          {/*<b>有品生活每一天</b>*/}
                          {/*<p>去发现</p>*/}
                      {/*</li>*/}
                  {/*))}*/}
              {/*</ul>*/}
      </div>
    )
  }
}

export default connect(state=>({...state}),{...actions})(Savour);

