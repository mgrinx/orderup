import React from "react";
import { Container, Row, Col } from "../components/Grid";
import OrderItemList from '../components/OrderItemList'

class ViewOrder extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <OrderItemList { ...this.props.location }/>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default ViewOrder;