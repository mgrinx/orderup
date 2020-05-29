import React from "react";
import { Link } from "react-router-dom";

class Order extends React.Component {
    render() {
        let { name, items } = this.props
        return (
            <Link to={{
                pathname: "/vieworder",
                state: { ...this.props }
            }}>
                <div className="collection-item"><span className="badge" data-badge-caption="items">{items.length}</span>{name}</div>
            </Link>
        );
    }
}

export default Order;