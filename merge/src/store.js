import {
  createStore
} from "redux";

let reducer = (state, action) => {

  if (action.type === "FillCart") {
    return {
      ...state,
      cartItems: action.cartItems
    }
  }

  return state;
}


let store = createStore(
  reducer, {
    cartItems: [],
    login: false,
    username: ""
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;