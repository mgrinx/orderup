import React from "react";
import './style.css'
// import axios from "axios";

class MenuItem extends React.Component {
    state = {
        quantity: 0
    }

    // async componentWillUnmount() {
    //     if (this.state.quantity>0) {
    //         let res = await axios.post("/orderitems", {
    //             orderId: this.props.order,
    //             itemId: this.props._id,
    //             quantity: this.state.quantity
    //         })
    //     }
    // }

    render() {
        let { name, price, timeToCook } = this.props
        let { quantity } = this.state
        return (
            <div className="menu-item collection-item">
                <span className="menu-item-label">{name}</span>

                <span className="new badge green valign-wrapper" data-badge-caption=""><i className="menu-item-icon material-icons">timer</i>&nbsp;~{timeToCook}min</span>

                <span className="badge">Price: ${price}</span>
                <span className="badge">Quantity: {quantity}</span>
                <button onClick={this.subtractItem} className="menu-item-button btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></button>
                <button onClick={this.addItem} className="menu-item-button btn-floating btn-small waves-effect waves-light light-green darken-1"><i className="material-icons">add</i></button>
            </div>
        );
    }

    addItem =()=> {
        this.setState({
            quantity: this.state.quantity + 1
        })
        let newQ = this.state.quantity + 1
        this.props.changeQuantity(this.props._id, newQ)
    }

    subtractItem =()=> {
        if (this.state.quantity > 0) {

            this.setState({
                quantity: this.state.quantity - 1
            })
            let newQ = this.state.quantity - 1
            this.props.changeQuantity(this.props._id, newQ)
        }
    }
}

export default MenuItem;