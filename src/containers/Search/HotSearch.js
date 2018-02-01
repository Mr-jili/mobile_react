import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
export default class HotSearch extends React.Component {
  render(){
    return (
      <div className='hot_search'>
        <h3>热门搜索</h3>
        <ul className='hot_list'>
          <li>
            <Link to='/detail'>热门搜索</Link>
          </li>
        </ul>
      </div>
    )
  }
}

