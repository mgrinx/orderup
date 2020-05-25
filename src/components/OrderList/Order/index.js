import React from "react";

class Order extends React.Component {
    render() {
        let { name, items } = this.props
        return (
            <a href="#!" className="collection-item"><span className="badge" data-badge-caption="items">{items.length}</span>{name}</a>
        );
    }
}

export default Order;