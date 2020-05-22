import React from "react";
import './style.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed" tabIndex="-1">
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <a href="/" className="brand-logo center">
                            <span role="img" aria-label="shortcake">🥑</span>&nbsp;OrderUp
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;