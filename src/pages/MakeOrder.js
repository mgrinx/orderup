import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Menu from "../components/Menu";

class MakeOrder extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <Menu />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default MakeOrder;