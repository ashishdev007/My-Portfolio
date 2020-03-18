import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class About extends Component {
  render() {
    return (
      <VizSensor
        onChange={isVisible => this.props.segmentChange('about', isVisible)}
      >
        <React.Fragment>
          <div id="about" name="about" className="row sectionHeader">
            <div className="sixteen wide column">
              <h1 className="ui huge header center aligned">About Me</h1>
              <div className="ui divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="five wide column aboutCard">
              <div className="ui rounded segment">
                <h1 className="large header">Who am I?</h1>
                <div className="content">
                  I am an international student at University of Louisiana
                  Monroe. Currently, I am a junior in Computer Science. I am
                  originally from Nepal
                  <i className="np flag"></i>
                </div>
              </div>
            </div>
            <div className="five wide column aboutCard">
              <div className="ui rounded segment">
                <h1 className="large header">What do I like?</h1>
                <div className="content">
                  I like to code and read books. On a cozy Saturday, you may
                  find me listening Bob Dylan's lyrics or trying to solve a
                  chess puzzle.
                </div>
              </div>
            </div>
            <div className="five wide column aboutCard">
              <div className="ui rounded segment">
                <h1 className="large header">What am I looking for?</h1>
                <div className="content">
                  I am looking for a job where I can dabble with interesting
                  problems. I want to be part of a creative and inspiring team
                  that pushes me to grow as a developer and as an individual.
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </VizSensor>
    );
  }
}

export default About;
