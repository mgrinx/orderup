import React from "react";
import RestaurantLogo from "./bell_pepper.svg"
import './style.css'
import M from 'materialize-css'

class Menu extends React.Component {
    componentDidMount() {
        let collapsible = document.querySelector(".collapsible")
        M.Collapsible.init(collapsible)
    }

    render() {
        let { children } = this.props
        return (

            <>
                <div className="center-align">
                    <h4 className="restaurant-label">
                        Welcome to
                        &nbsp;
                        <img className="restaurant-logo" src={RestaurantLogo} alt="bell pepper logo" />
                        &nbsp;
                        <strong><em>Pepper'z</em></strong>
                    </h4>
                    <div className="divider"></div>
                    <h6 className="menu-label">Here's what's on the menu:</h6>
                </div>
                <ul className="collapsible">
                        {children}
                </ul>
            </>
        );
    }
}

export default Menu;