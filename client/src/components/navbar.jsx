import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
    state = { active: 1 };

    changeActive = no => {
        this.setState({ active: no });
    };

    isActive = navNo => {
        if (navNo === this.state.active) {
            return "active item";
        }

        return "item";
    };
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
                        <Link
                            className={this.isActive(1)}
                            onClick={() => {
                                scroll.scrollToTop();
                                this.changeActive(1);
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={800}
                            offset={-70}
                            className={this.isActive(2)}
                            onClick={() => this.changeActive(2)}
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={800}
                            offset={-70}
                            className={this.isActive(3)}
                            onClick={() => this.changeActive(3)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={800}
                            offset={-70}
                            className={this.isActive(4)}
                            onClick={() => this.changeActive(4)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
