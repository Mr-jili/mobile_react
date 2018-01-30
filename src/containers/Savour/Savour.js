import React from 'react';
import actions from '../../store/actions/JL/savour'
import {connect} from 'react-redux'
import './Savour.less'
import {ajax} from '../Savour/util'
import Header from '../../components/Header/Header'

 class Savour extends React.Component {
    constructor(){
        super();
        this.state= {
            list: []
        } 
    }

    componentDidMount(){
        ajax({
            url:'http://localhost:9999/savour',
            method:'POST',
            data:{
                offset:0,
                limit:50
            }
        }).then((val)=>{
            this.setState({
                list:val
            })
        })
    }

    render(){
      console.log(this.props);
      return (
      <div className="savour_main">
          <Header back={false}>品味</Header>
              <ul className="savour_container"  style={{marginTop:'45px'}}>
                  {this.state.list.map((item,index)=>(
                      <li key={index}>
                          <img src={item.pic_url} alt=""/>
                          <span>{item.title}</span>
                          <b>有品生活每一天</b>
                          <p>去发现</p>
                      </li>
                  ))}
              </ul>
      </div>
    )
  }
}
export default connect(state=>({...state.list}),actions)(Savour);

