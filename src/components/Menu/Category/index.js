import React, { Component } from 'react';
import './style.css'
import { Row, Col } from '../../Grid';

class Category extends Component {

    render() {
        let { name, children } = this.props
        return (
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">{this.getCategoryIcon(name)}</i>
                    <i className="right-align material-icons">list</i>
                    {name}
                </div>
                <div className="menu-category collapsible-body">
                    <Row className="category-wrapper">
                        <Col className="s2 m1 category-side" />
                        <Col className="s10 m11 category-body">
                            <div className="collection">
                                {children}
                            </div>
                        </Col>
                    </Row>
                </div>
            </li>
        );
    }

    getCategoryIcon(categoryName) {
        switch(categoryName) {
            case "Breakfast":
                return "free_breakfast"
            case "Drinks":
                return "local_bar"
            case "Beverages":
                return "local_drink"
            default:
                return "restaurant_menu"
        }

    }
}

export default Category;