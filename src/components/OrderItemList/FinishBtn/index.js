import React from "react";
import './style.css'

class FinishBtn extends React.Component {
    render() {
        return (
            <div className="complete">
                <button onClick={this.props.finishOrder} className="btn btn-floating btn-large waves-effect waves-light light-blue darken-1 pulse">
                    <i className="material-icons">done_all</i>
                </button>
            </div>
        );
    }
}

export default FinishBtn;