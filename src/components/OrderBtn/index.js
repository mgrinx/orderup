import React from "react";
import './style.css'

class OrderBtn extends React.Component {
    render() {
        return (
            <div className="login">
                <h5>Make your order</h5>
                <a role="button" href="/menu" className="btn btn-floating btn-large waves-effect waves-light orange pulse">
                    <i className="material-icons">restaurant</i>
                </a>
            </div>
        );
    }
}

export default OrderBtn;