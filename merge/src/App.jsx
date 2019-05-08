import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Cart from "./component/cartfooter/Cart";
import CartBar from "./component/cartfooter/CartBar";
import itemList from "./component/itemlist/index";
import Navbar from "./component/navbar/reactnavbar";
import Itempage from "./component/itemlist/itempage.jsx";

let renderItem = routerData => {
  // 10

  // 11
  return (
    <div>
      <Itempage id={routerData.match.params.itemId} />
    </div>
  ); // 11
}; // 11

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact={true} path="/items" component={itemList} />
        <Route exact={true} path="/cart" component={Cart} />
        <Route exact={true} path="/items/:itemId" render={renderItem} />
      </div>
      <CartBar />
    </BrowserRouter>
  );
}

export default App;
