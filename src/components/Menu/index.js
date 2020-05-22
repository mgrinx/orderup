import React from "react";
import Category from "./Category"
import RestaurantLogo from "./bell_pepper.svg"
import './style.css'

class Menu extends React.Component {
    render() {
        let { menu } = this.props
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
                    {(()=>{

                        let categories = []
                        menu.forEach(item=> {
                            if(!categories.includes(item.category)) categories.push(item.category)
                        })
                        return categories.map((v,i)=> { return (
                            <Category key={v+i} name={v} items={menu.filter(item=>item.category===v)} />
                        )})

                    })()}
                </ul>
            </>
        );
    }
}

export default Menu;