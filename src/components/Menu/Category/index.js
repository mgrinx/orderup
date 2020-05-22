import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './style.css'
import { Row, Col } from '../../Grid';

class Category extends Component {

    render() {
        let { name, items } = this.props
        return (
            <li>
                <div className="collapsible-header">
                    {/* <i className="material-icons">{restaurant_menu}</i> */}
                    <i className="right-align material-icons">list</i>
                    {name}
                </div>
                <div className="menu-category collapsible-body">
                    <Row className="category-wrapper">
                        <Col className="s2 m1 category-side" />
                        <Col className="s10 m11 category-body">
                            <div className="collection">
                                {items.map(v=> { return (
                                    <MenuItem key={v._id} { ...v } />
                                )})}
                            </div>
                        </Col>
                    </Row>
                </div>
            </li>
        );
    }
}

export default Category;