import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class Learn extends Component {
  render() {
    return (
      <VizSensor
        onChange={isVisible => this.props.segmentChange('contact', isVisible)}
      >
        <React.Fragment>
          <div name="contact" className="row sectionHeader">
            <div className="sixteen wide column">
              <h1 className="ui huge header center aligned">Learn More</h1>
              <div className="ui divider"></div>
            </div>
          </div>
          <div id="learnMore" className="row">
            <div className="four wide column">
              <a
                href="https://www.linkedin.com/in/dev-ashish-101/"
                target="_blank"
              >
                <i className="linkedin icon"></i>
              </a>
            </div>
            <div className="four wide column">
              <a href="https://github.com/ashishdev007" target="_blank">
                <i className="github icon"></i>
              </a>
            </div>
            <div className="four wide column">
              <a href="mailto:ashishdevofficial@gmail.com" target="_blank">
                <i className="envelope icon"></i>
              </a>
            </div>
            <div className="four wide column">
              <a href="" target="_blank">
                <i className="file alternate icon"></i>
              </a>
            </div>
          </div>
        </React.Fragment>
      </VizSensor>
    );
  }
}

export default Learn;
