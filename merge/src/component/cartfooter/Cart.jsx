import React from 'react'
import {connect} from 'react-redux'
import './Cart.css'

class UnConnectedCart extends React.Component{

    onChangeHandle = (e) => {
        this.props.dispatch({type: "ChangeQuantity", itemId: e.target.id, quantity: e.target.value})
    }

    render(){
    let total = 0
    this.props.items.forEach( item => {
        total = total + parseFloat(item.itemPrice)*parseInt(item.itemQuantity)
    })
    return(<div className="general-margin">
        <h4>Your Items:</h4>
        {this.props.items.map( item => {
            return (<div className="item-cell-width">
                <div className="item-in-column">
                <div className="image"><img src={item.itemImage} height = "100px" alt=""></img></div>
                <div className="information-in-row">
                    <div>
                    <div>Name: {item.itemName}</div>
                    <hr></hr>
                    <div class="stick_bottom">${item.itemPrice}</div>
                    </div>
                    <div class="parent"><div className="stick_bottom">Qt: <input className="input-number" type="number" id={item.itemId} onChange={this.onChangeHandle}></input></div></div>
                </div>
                <div class="parent"><div className="stick_bottom subtotal">Subtotal: {(parseFloat(item.itemPrice)*item.itemQuantity).toFixed(2)}</div></div>
                </div>
                <hr></hr>
            </div>)
        })}
    <div className="total">Total: {total.toFixed(2)}</div>
    </div>)
        }
}

let mapStateToProps = (state) => {
    return {items: state.items}
}

let Cart = connect(mapStateToProps)(UnConnectedCart)

export default Cart