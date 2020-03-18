import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class Salut extends Component {
  render() {
    return (
      <VizSensor
        onChange={visible => this.props.segmentChange('home', visible)}
      >
        <div className="row" name="home">
          <div className="ten wide column">
            <img
              src={require('../images/photop-min.png')}
              className="ui rounded image"
              id="me"
              alt=""
            />
          </div>
          <div className="six wide column">
            <div className="salutationContainer">
              <div className="salutation">
                <h1>
                  Hi There! <br />
                </h1>
                <h1>I am</h1>
                <h1 id="name">Ashish Dev</h1>

                <a
                  href="#about"
                  className="ui big animated button"
                  tabIndex="0"
                >
                  <div className="visible content">About me</div>
                  <div className="hidden content">
                    <i className="question icon"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </VizSensor>
    );
  }
}

export default Salut;
