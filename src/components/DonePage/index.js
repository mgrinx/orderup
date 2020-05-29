import React from "react";
import { Redirect } from "react-router-dom";
import './style.css'

class DonePage extends React.Component {
    state = {
        timer: 10,
        interval: null
    }

    componentDidMount =()=> {
        this.setState({
            interval: setInterval(()=>{
                this.setState({
                    timer: this.state.timer-1
                })
            }, 1000)
        })
    }
    
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        if(this.state.timer <= 0) {
            clearInterval(this.state.interval)
            return <Redirect to="/customer" />
        }

        return (
            <div className="done center-align">
                <h5>Your order is on the grill! <span role="img" aria-label="smiling emoji">😊</span></h5>
                <em>Back to order page in {this.state.timer}...</em>
            </div>
        );
    }
}

export default DonePage;