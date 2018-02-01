import React from 'react';
import './Search.less';
import SearchInput from "./SearchInput";
import HotSearch from "./HotSearch";
import HistorySearch from "./HistorySearch";

export default class Search extends React.Component {
  render() {
    return (
      <div className='searchPage'>
        <SearchInput/>
        <HotSearch/>
        <HistorySearch/>
      </div>
    )
  }
}