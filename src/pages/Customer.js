import React from "react";
import { Container, Row, Col } from "../components/Grid";
import OrderBtn from "../components/OrderBtn";

class Customer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <OrderBtn />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Customer;