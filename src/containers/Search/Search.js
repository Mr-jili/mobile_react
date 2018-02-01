import React from 'react';
import './Search.less';
import SearchInput from "./SearchInput";
import HotSearch from "./HotSearch";
import HistorySearch from "./HistorySearch";
import SearchList from "./SearchList";
import {connect} from 'react-redux';
import actions from "../../store/actions/search";

class Search extends React.Component {
  async componentWillMount() {
    await this.props.getInitSearchAPI();
  }

  clearHistory = () => {
    this.props.clearHistorySearchAPI();
  };

  render() {
    return (
      <div className='searchPage'>
        <SearchInput detailVal={this.props.search.detailSearch}/>
        {(this.props.search.searchVal && this.props.search.searchResult.length) ? <SearchList/> : null}
        <div className='detailSearch'>
          <HotSearch hotSearch={this.props.search.hot}/>
          {
            this.props.search.history.length ?
              <HistorySearch historySearch={this.props.search.history} clearHistory={this.clearHistory}/> : null
          }
        </div>
      </div>
    )
  }
}

export default connect(state => ({...state}), actions)(Search);