import React from 'react';
import {Link} from 'react-router-dom';

export default class HistorySearch extends React.Component {
  render(){
    return (
      <div className='history_search'>
        <h3>历史搜索</h3>

        <ul className='history_list'>
          <li>
            <Link to='/detail'>历史搜索</Link>
          </li>
        </ul>
      </div>
    )
  }
}