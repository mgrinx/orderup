import React from "react";
import './style.css'

class MenuItem extends React.Component {
    state = {
        quantity: 0
    }
    
    render() {
        let { name, price, timeToCook } = this.props
        let { quantity } = this.state
        return (
            <div className="menu-item collection-item">
                <span className="menu-item-label">{name}</span>

                <span className="new badge green valign-wrapper" data-badge-caption=""><i className="menu-item-icon material-icons">timer</i>&nbsp;~{timeToCook}min</span>

                <span className="badge">Price: ${price}</span>
                <span className="badge">Quantity: {quantity}</span>
                <button onClick={this.removeItem} className="menu-item-button btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></button>
                <button onClick={this.addItem} className="menu-item-button btn-floating btn-small waves-effect waves-light light-green darken-1"><i className="material-icons">add</i></button>
            </div>
        );
    }

    removeItem =()=> {
        let { quantity } = this.state
        if (quantity > 0) {
            this.setState({
                quantity: quantity-1
            })
        }
    }

    addItem =()=> {
        this.setState({
            quantity: this.state.quantity+1
        })
    }
}

export default MenuItem;