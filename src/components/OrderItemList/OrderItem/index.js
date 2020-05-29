import React from "react";

class OrderItem extends React.Component {
    render() {
        let { name, quantity } = this.props
        return (
            <div className="collection-item">
                <span className="badge" data-badge-caption="x">{quantity}</span>
                {name}
            </div>
        );
    }
}

export default OrderItem;