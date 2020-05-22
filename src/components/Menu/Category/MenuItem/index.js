import React from "react";
import './style.css'

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item collection-item">
                <span className="menu-item-label">Spicy Black Bean Burger</span>

                <span className="new badge green valign-wrapper" data-badge-caption=""><i className="menu-item-icon material-icons">timer</i>&nbsp;~12min</span>

                <span className="badge">Price: $8.95</span>
                <span className="badge">Quantity: 0</span>
                <button className="menu-item-button btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></button>
                <button className="menu-item-button btn-floating btn-small waves-effect waves-light light-green darken-1"><i className="material-icons">add</i></button>
            </div>
        );
    }
}

export default MenuItem;