import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom';
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
    <App>
      <HashRouter>
        <Switch>
          <Route path='/main' component={Main}>首页</Route>
          <Route path='/goodscategory' component={Goodscategory}>分类</Route>
          <Route path='/savour' component={Savour}>品味</Route>
          <Route path='/cart' component={Cart}>购物车</Route>
          <Route path='/usercenter' component={UserCenter}>个人</Route>
          <Redirect to='/'/>
        </Switch>
      </HashRouter>
    </App>
  </Provider>
), document.getElementById('root'));
