import React from 'react';

export default class SearchInput extends React.Component {
  render() {
    return (
      <div className='search_com'>
        <img src="https://static.home.mi.com/youpin/static/m/res/images/std_tittlebar_main_device_back_normal.png" className='icon_back' alt=""/>
        <div className='search_box'>
          <img src="https://static.home.mi.com/youpin/static/m/res/images/home_search.png" alt=""/>
          {this.search?null:<label>111</label>}
          <input type="text" className='search_input' onChange={x=>this.search=x}/>
        </div>
        <span className='search_btn'>搜索</span>
      </div>
    )
  }
}