import React from "react";
import './style.css'

class OrderCompleteBtn extends React.Component {
    render() {
        return (
            <div className="complete">
                <button onClick={this.props.placeOrder} className="btn btn-floating btn-large waves-effect waves-light light-green darken-1 pulse">
                    <i className="material-icons">done</i>
                </button>
            </div>
        );
    }
}

export default OrderCompleteBtn;