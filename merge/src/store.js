import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "ChangeQuantity") {
    return {
      ...state,
      cartItems: state.cartItems.map(item => {
        if(item.itemId === action.itemId){
          return { ...item, itemQuantity: parseInt(action.quantity) }
                                                   } else{
          return item
                                                         }
                                             }
      )
    };
  }

  if (action.type === "RemoveItem") {
    let newItems = state.cartItems.filter( item => {
      return item.itemId !== action.itemId
    })
    return {...state, cartItems: newItems}
  }

  if(action.type === "FillCart") {

 /*   fetch("http://localhost:4000/cartItems", { method: "GET" })
      .then(headers => {
        return headers.text();
      })
      .then(body => {
        let cartItems = JSON.parse(body)
        console.log("body: ", cartItems)
        return {...state, cartItems: cartItems}
      });*/

    return {...state, cartItems: action.cartItems}
  }

  return state;
}



let store = createStore(
  reducer,
  {
    cartItems: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
