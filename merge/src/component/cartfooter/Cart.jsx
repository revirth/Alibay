import React from "react";
import { connect } from "react-redux";
import "./cart.css";
import "./style.css";

class UnConnectedCart extends React.Component {
  onChangeHandleQuantity = e => {
    console.log(e.target.value)
    this.props.dispatch({
      type: "ChangeQuantity",
      itemId: e.target.id,
      quantity: e.target.value
    });
  };

  onClickRemoveItem = e => {
    this.props.dispatch({ type: "RemoveItem", itemId: e.target.id });
  };

  render() {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.itemPrice) * parseInt(item.itemQuantity);
    });
    return (
      <div className="general-margin">
        <h4>Your Items:</h4>
        {this.props.items.map(item => {
          return (
            <div className="item-cell-width">
              <div className="item-in-column">
                <div className="image">
                  <img src={item.itemImage} height="150px" width= "150px" alt="" />
                </div>
                <div className="information-in-row">
                  <div>
                    <div>Name: {item.itemName}</div>
                    <hr />
                    <div className="stick_bottom">${item.itemPrice}</div>
                  </div>
                  <div className="parent">
                    <div className="stick_bottom">
                      Qt:{" "}
                      <input
                        className="input-number"
                        type="number"
                        value={item.itemQuantity}
                        id={item.itemId}
                        onChange={this.onChangeHandleQuantity}
                      />
                    </div>
                  </div>
                </div>
                <div className="parent">
                  <div className="stick_bottom subtotal">
                    Subtotal:{" "}
                    {(parseFloat(item.itemPrice) * item.itemQuantity).toFixed(
                      2
                    )}
                  </div>
                </div>
                <div>
                  <i
                    className="fa fa-times"
                    id={item.itemId}
                    onClick={this.onClickRemoveItem}
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        <div className="total">Total: {total.toFixed(2)}</div>
        <div className="parent-horizontal">
          <div classname="button-right">
            <button
              className="checkout-button f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn grow"
              onClick={this.onClickHandle}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return { items: state.cartItems };
};

let Cart = connect(mapStateToProps)(UnConnectedCart);

export default Cart;
