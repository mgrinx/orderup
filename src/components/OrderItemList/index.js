import React from "react";
// import "./style.css"
import OrderItem from './OrderItem'
import API from '../../utils/API'
import FinishBtn from "./FinishBtn";
import { Redirect } from "react-router-dom";

class OrderItemList extends React.Component {
    state = {
        quantities: [],
        names: [],
        orderDone: false
    }

    async componentDidMount() {
        let itemQuantities = []
        let itemNames = []

        for (let item of this.props.state.items) {
            let res = await API.get("/orderitems/" + item)
            itemQuantities.push(res.data.quantity)
            let i = await API.get("/items/" + res.data.itemId)
            itemNames.push(i.data.name)
        }
        
        this.setState({
            quantities: itemQuantities,
            names: itemNames
        })
    }

    render() {
        let { name, phone } = this.props.state
        let { names, quantities, orderDone } = this.state

        if (orderDone) {
            return <Redirect to="/orders" />
        }

        return (
            <>
                {/* <Row>
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

                </Row> */}
                <div className="collection with-header">
                    <div className="collection-header center-align"><h6><em>Items for order: {name}</em></h6></div>
                    {names.map((v,i)=> { return (
                        <OrderItem key={i} name={v} quantity={quantities[i]} />
                    )})}
                </div>
                <FinishBtn finishOrder={this.finishOrder} />
            </>
        );
    }

    finishOrder =async()=> {
        await API.delete("/orders/" + this.props.state._id)
        this.setState({ orderDone: true })
    }
}

export default OrderItemList;

