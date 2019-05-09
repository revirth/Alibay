// import ReactDOM from "react-dom";
import "./main.css";
import "./style.css";
import React, { Component } from "react";
import Product from "./product.jsx";
import { item } from "./items.js";
import {connect} from 'react-redux'

class UnconnectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      cart: [],
      items: []
    };
  }

  componentDidMount = async () => {
    let fetchUrl = `/items${window.location.search}`;
    let response = await fetch(fetchUrl);
    let data = await response.json();

    if (Array.isArray(data)) this.setState({ items: data });

    console.table(data);
  };

  handleAddFunc = ( itemId) => {
    let data = new FormData()
    data.append("itemId", itemId)
      fetch("http://localhost:4000/addCartItem", { method: "POST", body: data}).then( headers => {
        return headers.text()
      }).then( body => {
        let result = true
        if(result){
          fetch("http://localhost:4000/cartItems", { method: "GET" }).then(headers => {
             return headers.text();
                                                                                      }).then(body => {
      this.props.dispatch({ type: "FillCart", cartItems: JSON.parse(body) });
                                                                                                      })
        }
      })
  };

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
        <main className="pa3 pa5-ns flex flex-wrap">
          {this.state.items.map(p => (
            <Product key={p.id} {...p} addFunc={this.handleAddFunc} />
          ))}
        </main>
      </div>
    );
  }
}

let mapStatetoProps = (state) => {
  return state
}

let app = connect(mapStatetoProps)(UnconnectedApp)

export default app
// ReactDOM.render(<App />, document.getElementById("root"));
