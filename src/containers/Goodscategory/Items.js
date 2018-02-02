import React from 'react';
import {Link} from 'react-router-dom'
export default class Items extends React.Component{
  render(){
    return (
      <div className="items">
        {this.props.data.map((item, index) => (
          <div className="item" key={index}>
            <Link to={{pathname: `/detail/${item.gid}`}}>
              <img src={item.url} alt=""/>
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
        <div className="item"></div>
        <div className="item"></div>
      </div>
    )
  }
}