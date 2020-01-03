import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div
                className="ui fixed big inverted menu"
                id="navbar"
                style={
                    this.props.transparent
                        ? {
                              backgroundColor: "rgba(27, 28, 29, 0.8)"
                          }
                        : {}
                }
            >
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
