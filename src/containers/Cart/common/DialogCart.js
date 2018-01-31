import React, {Component} from "react";
import "./DialogCart.less";

import {connect} from "react-redux";
import actions from "../../../store/actions/cart/cart";

class DialogCart extends Component {
  render() {
    let {ifShow, text} = this.props;
    return (
      <div style={ifShow === "block" ? {display: "block"} : {display: "none"}} className="wj-dialog-cart"><p>{text}</p>
      </div>
    )
  }
}

export default connect(state => ({...state.cart}), actions)(DialogCart);
