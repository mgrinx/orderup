import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './style.css'
import { Row, Col } from '../../Grid';

class Category extends Component {
    render() {
        return (
            <li>
                <div className="collapsible-header">
                    <i className="material-icons">restaurant_menu</i>
                    <i className="right-align material-icons">list</i>
                    Entrées
                </div>
                <div className="menu-category collapsible-body">
                    <Row className="category-wrapper">
                        <Col className="s2 m1 category-side" />
                        <Col className="s10 m11 category-body">
                            <div className="collection">
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                        </Col>
                    </Row>
                </div>
            </li>
        );
    }
}

export default Category;