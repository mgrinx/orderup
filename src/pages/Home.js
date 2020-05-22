import React from "react";
import { Container, Row, Col } from "../components/Grid";
import LoginBtn from "../components/LoginBtn";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <LoginBtn />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Home;