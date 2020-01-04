import React, { Component } from "react";
import "./App.css";

import Navbar from "./navbar.jsx";
import Salut from "./salutation.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Learn from "./learn.jsx";

class App extends Component {
    state = { transparentNav: false, activeSegment: "home" };

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

        console.log(this.about);
    }

    segmentChange = (segment, isVisible) => {
        if (isVisible) {
            console.log(segment + " is " + isVisible);
            this.setState({ activeSegment: segment });
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* <Navbar
                    transparent={this.state.transparentNav}
                    activeItem={this.state.activeSegment}
                /> */}
                <div id="content">
                    <div className="ui container">
                        <div className="ui grid">
                            <Salut segmentChange={this.segmentChange} />

                            <About segmentChange={this.segmentChange} />

                            <div className="row subHeader">
                                <div className="column">
                                    <h2 className="ui horizontal divider header">
                                        <i className="cogs icon"></i>
                                        Skills
                                    </h2>
                                </div>
                            </div>
                            <Skills segmentChange={this.segmentChange} />

                            <Projects segmentChange={this.segmentChange} />
                            <Learn segmentChange={this.segmentChange} />
                        </div>
                    </div>
                </div>

                <div id="footer" ref={this.about}>
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
