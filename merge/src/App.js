import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import ItemsInCart from "./component/cartfooter/ItemInCart";
import CartBar from "./component/cartfooter/CartBar";
import itemList from "./component/itemlist/index";
import Navbar from "./component/navbar/reactnavbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route exact={true} path="/items" component={itemList} />
        <Route exact={true} path="/cart" component={ItemsInCart} />
      </div>
      <CartBar />
    </BrowserRouter>
  );
}

export default App;
