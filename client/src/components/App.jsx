import React, { Component } from "react";
import "./App.css";

import Navbar from "./navbar.jsx";
import Salut from "./salutation.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Learn from "./learn.jsx";

class App extends Component {
    state = { transparentNav: false };

    about = React.createRef();

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 45) {
                if (this.state.transparentNav) {
                    this.setState({ transparentNav: false });
                }
            } else if (!this.state.transparentNav) {
                this.setState({ transparentNav: true });
            }
        });
    }

    scrollTo = () => {
        console.log(this.about);
        this.about.current.scrollIntoView({ behavior: "smooth" });
    };
    render() {
        return (
            <React.Fragment>
                <Navbar
                    transparent={this.state.transparentNav}
                    scrollTo={this.scrollTo}
                />
                <div id="content">
                    <div className="ui container">
                        <div className="ui grid">
                            <Salut />

                            <About ref={this.about} />

                            <div className="row subHeader">
                                <div className="column">
                                    <h2 className="ui horizontal divider header">
                                        <i className="cogs icon"></i>
                                        Skills
                                    </h2>
                                </div>
                            </div>
                            <Skills />

                            <Projects />
                            <Learn />
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="ui center aligned">
                        <p>
                            <em>
                                "What I cannot create, I do not understand."
                            </em>
                        </p>
                        <p>-Richard Feynman</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
