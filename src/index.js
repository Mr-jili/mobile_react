import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import Cart from "./containers/Cart/Cart";
import Main from "./containers/Main/Main";
import UserCenter from "./containers/UserCenter/UserCenter";
import Savour from "./containers/Savour/Savour";
import Goodscategory from "./containers/Goodscategory/Goodscategory";
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/goodscategory' component={Goodscategory}/>
          <Route path='/savour' component={Savour}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/usercenter' component={UserCenter}/>
          <Redirect to='/'/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
