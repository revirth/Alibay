import React from 'react'
import {connect} from 'react-redux'
import './App.css'

class UnconnectedCartBar extends React.Component {

    render(){
        return(
            <div className="footer row">
                <div className="equal-width"></div>
                <div className="equal-width">
                        <div className="column text-title">Cart :</div>
                        <div className="column number"> {this.props.number}</div>
                        <div className="column">
                            <div className="height100"><img src="https://image.flaticon.com/icons/svg/60/60992.svg" height='15px' alt=""></img></div>
                            <div className="text">items</div>
                        </div>
                </div>
                <div className="column equal-width"><div className="column text-title">Total: </div><div className="column number">${this.props.total.toFixed(2)}</div></div>
                <div className="column equal-width"><button className="button" onClick={this.handleOnClick}>View Cart</button></div>
                <div className="equal-width"></div>
            </div>)
    }

}

let mapStatetoProps = (state) =>{
    let numberOfItems = 0
    let totalPrice = 0
    state.items.forEach( item => {
        totalPrice = totalPrice + parseFloat(item.itemPrice)*parseInt(item.itemQuantity)
        numberOfItems = numberOfItems + parseInt(item.itemQuantity)
    })
    return ({number: numberOfItems, total: totalPrice })

}

let CartBar = connect(mapStatetoProps)(UnconnectedCartBar)

export default CartBar
