import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Menu from "../components/Menu";
import API from '../utils/API'

class MakeOrder extends React.Component {
    state = {
        menu: []
    }

    async componentDidMount() {
        let res = await API.get("/restaurants")
        let restaurant = res.data[0]._id
        res = await API.get("/restaurants/"+restaurant+"/menu", { crossDomain: true })
        this.setState({ menu: res.data })
        console.log(this.state)
    }

    render() {
        let { menu } = this.state

        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <Menu menu={menu} />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default MakeOrder;