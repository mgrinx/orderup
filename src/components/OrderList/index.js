import React from "react";
import Order from './Order'
import { Col, Row } from "../Grid";
import "./style.css"
import API from '../../utils/API'

class OrderList extends React.Component {
    state = {
        orders: []
    }

    async componentDidMount() {
        let res = await API.get("/restaurants")
        let restaurant = res.data[0]._id
        res = await API.get("/orders")
        let data = res.data.filter(v=>v.restaurantId===restaurant)
        this.setState({ orders: data })
        console.log(this.state)
    }

    render() {
        let { orders } = this.state
        return (
            <>
                <Row>
                    <Col className="s6 center-align">

                        <span className="btn-label"><em>Customer UI</em></span>
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
                    {orders.map(v=> { return (
                        <Order key={v._id} { ...v } />
                    )})}
                </div>
            </>
        );
    }
}

export default OrderList;

