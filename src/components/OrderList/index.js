import React from "react";
import Order from './Order'
import { Col, Row } from "../Grid";
import "./style.css"

class OrderList extends React.Component {
    render() {
        return (
            <>
            <Row>
                <Col className="s6 center-align">

                    <span className="btn-label"><em>Customer</em></span>
                    <a role="button" href="/customer" className="btn-floating waves-effect waves-light light-green darken-1">
                        <i className="material-icons">meeting_room</i>
                    </a>
                </Col>
                <Col className="s6 center-align">

                    <span className="btn-label"><em>Log out</em></span>
                    <a role="button" href="/" className="btn-floating waves-effect waves-light red lighten-2">
                        <i className="material-icons">meeting_room</i>
                    </a>
                </Col>

            </Row>
            <div className="collection with-header">
                <div className="collection-header center-align"><h6><em>Active orders</em></h6></div>
                <Order />
            </div>
            </>
        );
    }
}

export default OrderList;

