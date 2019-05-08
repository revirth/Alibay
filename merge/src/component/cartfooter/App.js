import React from 'react';
import CartBar from './CartBar'
import './App.css';
import ItemsInCart from './ItemInCart';

class App extends React.Component{

render(){
  return(<div>
    <ItemsInCart></ItemsInCart>
    <CartBar></CartBar>
  </div>)
}
}

export default App;
