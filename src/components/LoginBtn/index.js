import React from "react";
import { Redirect } from "react-router-dom";
import './style.css'

class LoginBtn extends React.Component {
    state = {
        loggedInUser: ""
    }

    render() {
        if(this.state.loggedInUser !== "") {
            return <Redirect to="/orders" />
        }

        return (
            <div className="login-field">
                <div className="login-form">
                    <h5>Restaurant Login</h5>
                    <em>Type the username "restaurant" to enter demo mode.</em>
                    <form>
                        <input id="username-input" type="text" placeholder="username" />
                        <input id="password-input" type="password" placeholder="password" />
                    </form>
                </div>
                <button onClick={this.login} className="btn btn-floating btn-large waves-effect waves-light light-green darken-1 pulse">
                    <i className="material-icons">vpn_key</i>
                </button>
            </div>
        );
    }

    login =()=> {
        let username = document.querySelector("#username-input").value
        console.log(username)
        if (username === "restaurant") {
            this.setState({ loggedInUser: username })
        }
    }
}

export default LoginBtn;