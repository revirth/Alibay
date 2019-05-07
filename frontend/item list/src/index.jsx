import ReactDOM from "react-dom";
import "./main.css";
import "./style.css";
import React, { Component } from "react";
import Product from "./product.jsx";
import { item } from "./items.js";
import StripeCheckout from "react-stripe-checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      cart: []
    };
  }

  handleAddFunc = product => {};
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      <div>
        `
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_CRKICC1dKUDItn2acglHknjy00vt3Eu2o5
          "
        />
        <main className="pa3 pa5-ns flex flex-wrap">
          {item.map(p => (
            <Product key={p.id} {...p} addFunc={this.handleAddFunc} />
          ))}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
