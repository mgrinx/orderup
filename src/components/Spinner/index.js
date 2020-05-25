import React from 'react';
import { Container, Row, Col } from '../Grid';

class Spinner extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="s12 center-align">
                        <div className="preloader-wrapper big active">
                            <div className="spinner-layer spinner-green-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Spinner;