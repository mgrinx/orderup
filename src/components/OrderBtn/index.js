import React from "react";
import { Redirect } from "react-router-dom";
import './style.css'

class LoginBtn extends React.Component {
    state = {
        name: "",
        phone: ""
    }

    render() {
        if(this.state.name !== "" && this.state.phone !== "") {
            return <Redirect to={{
                pathname: "/menu",
                state: { name: this.state.name, phone: this.state.phone }
            }} />
        }

        return (
            <div className="info-field">
                <div className="info-form">
                    <h5>Place your order</h5>
                    <form>
                        <input id="name-input" type="text" placeholder="name" />
                        <input id="phone-input" type="tel" placeholder="phone"/>
                    </form>
                </div>
                <button onClick={this.createOrder} className="btn btn-floating btn-large waves-effect waves-light orange pulse">
                    <i className="material-icons">restaurant</i>
                </button>
            </div>
        );
    }

    createOrder =()=> {
        this.setState({
            name: document.querySelector("#name-input").value,
            phone: document.querySelector("#phone-input").value
        })
    }
}

export default LoginBtn;