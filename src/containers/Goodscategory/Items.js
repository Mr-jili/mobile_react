import React from 'react';
import {Link} from 'react-router-dom'
export default class Items extends React.Component{
  render(){
      return (
      <div className="items">
        {this.props.data.map((item, index) => {
            let {url,gid,title}=item;
            return <div className="item" key={index}>
                <Link to={{pathname: `/detail/${gid}`,state:gid}}>
                    <img src={url} alt=""/>
                    <span>{title}</span>
                </Link>
            </div>
        })}
        <div className="item"></div>
        <div className="item"></div>
      </div>
    )
  }
}