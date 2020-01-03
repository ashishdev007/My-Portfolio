import React, { Component } from "react";

class Salut extends Component {
    render() {
        return (
            <div className="row">
                <div className="ten wide column">
                    <img
                        src={require("./photop.png")}
                        className="ui rounded image"
                        id="me"
                        alt=""
                    />
                </div>
                <div className="six wide column">
                    <div className="salutationContainer">
                        <div className="salutation">
                            <h1>
                                Hi There! <br />
                            </h1>
                            <h1>I am</h1>
                            <h1 id="name">Ashish Dev</h1>

                            <div
                                className="ui big animated button"
                                tabIndex="0"
                            >
                                <div className="visible content">About me</div>
                                <div className="hidden content">
                                    <i className="question icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Salut;
