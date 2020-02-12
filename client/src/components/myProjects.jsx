import React, { Component } from 'react';
import colorGame from '../images/colorGame.png';
import shopping from '../images/shopping.png';
import yelpCamp from '../images/yelpCamp.png';

class Projects extends Component {
  project = (image, title, description) => {
    return (
      <div className="row">
        <div className="ui rounded segment project">
          <div className="image">
            <img className="ui rounded image" src={image} />
          </div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="meta">Additional Details</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div name="projects" className="row sectionHeader">
          <div className="sixteen wide column">
            <h1 className="ui huge header center aligned">Projects</h1>
            <div className="ui divider"></div>
          </div>
        </div>
        {this.project(
          yelpCamp,
          'Color Game',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        )}
        {this.project(
          shopping,
          'Shopping List',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        )}
        {this.project(
          colorGame,
          'Color Game',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        )}
      </React.Fragment>
    );
  }
}

export default Projects;
