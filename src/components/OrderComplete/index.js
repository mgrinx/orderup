import React from "react";
import './style.css'

class OrderBtn extends React.Component {
    render() {
        return (
            <div className="login">
                <h5>Make an order</h5>
                <a role="button" href="/orders" className="btn btn-floating btn-large waves-effect waves-light light-green darken-1 pulse">
                    <i className="material-icons">vpn_key</i>
                </a>
            </div>
        );
    }
}

export default OrderBtn;