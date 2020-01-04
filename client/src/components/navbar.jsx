import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
    state = { activeItem: "home" };

    changeActive = no => {
        // this.setState({ activeItem: no });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({ activeItem: this.props.activeItem });
        }
        console.log(this.props.activeItem);
    }

    isActive = item => {
        if (item === this.state.activeItem) {
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
                            to="home"
                            className={this.isActive("home")}
                            onClick={() => {
                                this.changeActive(1);
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            className={this.isActive("about")}
                            onClick={() => this.changeActive(2)}
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            className={this.isActive("projects")}
                            onClick={() => this.changeActive(3)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={400}
                            offset={-70}
                            className={this.isActive("contact")}
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
