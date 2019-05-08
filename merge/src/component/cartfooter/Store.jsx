import {createStore} from 'redux'

let reducer = (state,action) => {
    if(action.type === "ChangeQuantity"){
       return {...state, items: state.items.map( item => item.itemId === parseInt(action.itemId) ? {...item, itemQuantity: parseInt(action.quantity)} : item)}    
    }
    return state
}

let store = createStore(reducer, {items: [{itemId: 1, itemName: "dishe1", itemImage: "image1.jpg", itemPrice: "10.81", itemQuantity: 0},
{itemId: 2, itemName: "dishe2", itemImage: "image2.jpg", itemPrice: "20.56", itemQuantity: 0}]}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store 