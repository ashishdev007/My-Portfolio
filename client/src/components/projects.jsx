import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row sectionHeader">
                    <div className="sixteen wide column">
                        <h1 className="ui huge header center aligned">
                            Projects
                        </h1>
                        <div className="ui divider"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="eight wide column">
                        <div className="ui rounded segment project">
                            <div className="ui items">
                                <div className="ui item">
                                    <div className="image">
                                        <img
                                            className="ui rounded image"
                                            src="./proxy.JPG"
                                        />
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            <span>Description</span>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Lorem Ipsum has been the
                                                industry's standard dummy text
                                                ever since the 1500s, when an
                                                unknown printer took a galley of
                                                type and scrambled it to make a
                                                type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="extra">
                                            Additional Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eight wide column">
                        <div className="ui rounded segment project">
                            <div className="ui items">
                                <div className="ui item">
                                    <div className="image">
                                        <img
                                            className="ui rounded image"
                                            src="./proxy.JPG"
                                        />
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            <span>Description</span>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Lorem Ipsum has been the
                                                industry's standard dummy text
                                                ever since the 1500s, when an
                                                unknown printer took a galley of
                                                type and scrambled it to make a
                                                type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic typesetting,
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="extra">
                                            Additional Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;
