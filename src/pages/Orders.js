import React from "react";
import { Container, Row, Col } from "../components/Grid";
import OrderList from "../components/OrderList"

class Orders extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <OrderList />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Orders;