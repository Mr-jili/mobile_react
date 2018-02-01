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
import Pay from "./containers/Pay/Pay";
import store from './store';
import "../src/common/basic.css";
import ServiceLogin from "./containers/ServiceLogin/ServiceLogin";
import ServiceRegister from "./containers/ServiceRegister/ServiceRegister";
import Detail from "./containers/Detaill/Detail";
import Search from "./containers/Search/Search";
import Collection from "./containers/Collection/Collection";

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
          <Route path='/login' component={ServiceLogin}/>
          <Route path='/register' component={ServiceRegister}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/search' component={Search}/>
          <Route path='/favor' component={Collection}/>
          <Route path='/pay' component={Pay}/>{/*支付页面临时使用*/}
          <Redirect to='/'/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
