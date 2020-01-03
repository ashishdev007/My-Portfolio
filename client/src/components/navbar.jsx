import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div className="ui fixed big secondary menu" id="navbar">
                <div className="ui container">
                    <div className="right menu">
                        <a className="active item">Home</a>
                        <a className="item">Messages</a>
                        <a className="item">Friends</a>
                        <a className="ui item">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
