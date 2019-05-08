import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "ChangeQuantity") {
    return {
      ...state,
      cartItems: state.cartItems.map(item =>
        item.itemId === parseInt(action.itemId)
          ? { ...item, itemQuantity: parseInt(action.quantity) }
          : item
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
