import React from "react";
import Category from "./Category"
import RestaurantLogo from "./bell_pepper.svg"
import './style.css'

class Menu extends React.Component {
    render() {
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
                    <Category />
                    <Category />
                    <Category />
                </ul>
            </>
        );
    }
}

export default Menu;