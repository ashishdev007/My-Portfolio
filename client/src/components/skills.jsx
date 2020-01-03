import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="row" id="skillsRow">
                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-java"></i>
                    </div>
                    <h3 className="ui header skillName">Java</h3>
                </div>
                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-js-square"></i>
                    </div>
                    <h3 className="ui header skillName">JavaScript</h3>
                </div>
                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-python"></i>
                    </div>
                    <h3 className="ui header skillName">Python</h3>
                </div>
                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-node-js"></i>
                    </div>
                    <h3 className="ui header skillName">Node</h3>
                </div>
                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-react"></i>
                    </div>
                    <h3 className="ui header skillName">React</h3>
                </div>

                <div className="five wide column">
                    <div className="skillIcon">
                        <i className="fab fa-git-alt"></i>
                    </div>
                    <h3 className="ui header skillName">Git</h3>
                </div>
            </div>
        );
    }
}

export default Skills;
