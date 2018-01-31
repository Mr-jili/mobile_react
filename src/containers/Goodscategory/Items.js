import React from 'react';
export default class Items extends React.Component{
  render(){
    return (
      <div className="items" ref>
        {this.props.data.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.url} alt=""/>
            <span>{item.title}</span>
          </div>
        ))}
        <div className="item"></div>
        <div className="item"></div>
      </div>
    )
  }
}