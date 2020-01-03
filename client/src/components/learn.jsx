import React, { Component } from "react";

class Learn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row sectionHeader">
                    <div className="sixteen wide column">
                        <h1 className="ui huge header center aligned">
                            Learn More
                        </h1>
                        <div className="ui divider"></div>
                    </div>
                </div>
                <div id="learnMore" className="row">
                    <div className="four wide column">
                        <i className="linkedin icon"></i>
                    </div>
                    <div className="four wide column">
                        <i className="github icon"></i>
                    </div>
                    <div className="four wide column">
                        <i className="envelope icon"></i>
                    </div>
                    <div className="four wide column">
                        <i className="file alternate icon"></i>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Learn;
