import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Menu from "../components/Menu";
import API from '../utils/API'
import Category from "../components/Menu/Category";
import MenuItem from "../components/Menu/Category/MenuItem";
import OrderCompleteBtn from "../components/OrderCompleteBtn";
// import Spinner from "../components/Spinner";
import { Redirect } from "react-router-dom";

class MakeOrder extends React.Component {
    state = {
        isLoading: true,
        orderDone: false,
        restaurant: {}, //restaurant
        categories: [],
        menu: [], //[itemId]
        order: "", //orderId
        orderItems: [] //[{id:String,quantity:Number}]
    }

    async componentDidMount() {
        // do all the api calls

        //set restaurant
        //TODO: add a way for restaurants to login to their own acct
        let res = await API.get("/restaurants")
        this.setState({ restaurant: res.data[0] })

        //set menu
        res = await API.get("/restaurants/"+this.state.restaurant._id+"/menu")
        this.setState({ menu: res.data })
        // set categories
        let ca = []
        this.state.menu.forEach(item=> {
            if(!ca.includes(item.category)) ca.push(item.category)
        })
        this.setState({ categories: ca })

        this.setState({ isLoading: false })
    }

    render() {
        let { menu, categories, orderDone } = this.state

        if(orderDone) {
            return <Redirect to="/done" />
        }


        // if(isLoading) {
        //     return <Spinner />
        // }

        return (
            <Container>
                <Row>
                    <Col className="s12">
                        <OrderCompleteBtn placeOrder={this.placeOrder}/>
                        <Menu>
                            {categories.map((name, categoryIndex) => (
                                <Category key={categoryIndex} name={name}>
                                    {menu.map((item, itemIndex) => (
                                        item.category===name?
                                        <MenuItem key={itemIndex} changeQuantity={this.changeQuantity} { ...item } />
                                        :null
                                    ))}
                                </Category>
                            ))}
                        </Menu>
                    </Col>
                </Row>
            </Container>
        );
    };

    changeQuantity =(itemId, q)=> {
        this.setState(prevState => {
            for (let item of prevState.orderItems) {
                if(item.id === itemId) {
                    item.quantity = q
                    return prevState
                }
            }
            // console.log("Didn't find item, adding...")
            return prevState.orderItems.push({
                id: itemId,
                quantity: q
            })
        })
    }

    placeOrder =async()=> {
        let { restaurant, orderItems } = this.state
        let { name, phone } = this.props.location.state
        //make the order
        let res = await API.post("/orders", {
            restaurantId: restaurant._id,
            name: name,
            phone: phone
        })
        let order = res.data
        //TODO: let the user enter this data

        for(let item of orderItems ) {
            await API.post("/orderitems", {
                orderId: order._id,
                itemId: item.id,
                quantity: item.quantity
            })
        }

        this.setState({ orderDone: true })
    }
}

export default MakeOrder;