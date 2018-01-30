import React from 'react';
import './Savour.less'
import {ajax} from '../Savour/util'


export default class Savour extends React.Component {
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
      return (
      <div className="savour_main">
          <div className="savour_taste">品味</div>
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

