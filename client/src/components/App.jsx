import React, { Component } from "react";
import "./App.css";

import Navbar from "./navbar.jsx";
import Salut from "./salutation.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Learn from "./learn.jsx";

class App extends Component {
    state = {};

    componentDidMount() {
        window.addEventListener("scroll", () => {
            console.log("Scroll");
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div id="content">
                    <div className="ui container">
                        <div className="ui grid">
                            <Salut />

                            <About />

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
