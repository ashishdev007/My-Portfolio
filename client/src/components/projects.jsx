import React, { Component } from "react";
import VizSensor from "react-visibility-sensor";

class Projects extends Component {
    render() {
        return (
            <VizSensor
                onChange={isVisible =>
                    this.props.segmentChange("projects", isVisible)
                }
            >
                <React.Fragment>
                    <div name="projects" className="row sectionHeader">
                        <div className="sixteen wide column">
                            <h1 className="ui huge header center aligned">
                                Projects
                            </h1>
                            <div className="ui divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight wide column">
                            <div className="ui rounded segment ">
                                <div className="project">
                                    <div className="ui items">
                                        <div className="ui item">
                                            <div className="image">
                                                <img
                                                    className="ui rounded image"
                                                    src={require("./shopping.png")}
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
                                                        industry's standard
                                                        dummy text ever since
                                                        the 1500s, when an
                                                        unknown printer took a
                                                        galley of type and
                                                        scrambled it to make a
                                                        type specimen book. It
                                                        has survived not only
                                                        five centuries, but also
                                                        the leap into electronic
                                                        typesetting, remaining
                                                        essentially unchanged.
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
                        <div className="eight wide column">
                            <div className="ui rounded segment project">
                                <div className="ui items">
                                    <div className="ui item">
                                        <div className="rounded image">
                                            <img
                                                className="ui image"
                                                src={require("./colorGame.PNG")}
                                            />
                                        </div>
                                        <div className="content">
                                            <a className="header">
                                                RGB Color Guessing Game
                                            </a>
                                            <div className="meta">
                                                <span>Description</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Designed a game using
                                                    vanilla javascript. This
                                                    game is fully responsive and
                                                    allows users to guess a
                                                    color by a rgb color code
                                                    given
                                                </p>
                                            </div>
                                            <a className="extra">
                                                <i class="linkify icon"></i>
                                                Project Link
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </VizSensor>
        );
    }
}

export default Projects;
