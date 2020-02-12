import React, { Component } from 'react';
import colorGame from '../images/colorGame.png';
import shopping from '../images/shopping.png';
import yelpCamp from '../images/yelpCamp.png';

class Projects extends Component {
  react = (<span className="ui label teal">ReactJs</span>);
  express = (<span className="ui label blue">Express</span>);
  mongodb = (<span className="ui label green">MongoDB</span>);
  redux = (<span className="ui label brown">Redux</span>);
  mysql = (<span className="ui label violet">MySQL</span>);
  node = (<span className="ui label olive">NodeJs</span>);
  ejs = (<span className="ui label grey">EJS</span>);
  heroku = (<span className="ui label purple">Heroku</span>);
  javascript = (<span className="ui label yellow">JavaScript</span>);

  project = (image, title, description, stack, link) => {
    var index = 0;
    return (
      <div className="row">
        <div className="ui rounded segment project">
          <div className="image">
            <img className="ui rounded image" src={image} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            {/* <div className="meta">
              <span>Description</span>
            </div> */}
            <div className="description">
              <p>{description}</p>
              <i className="code icon"></i>
              {stack.map(element => element)}
            </div>
            <div className="meta">
              <a href={`${link}`} target="_blank">
                <i className="linkify icon"></i>Project Link
              </a>
            </div>
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
          'Yelpcamp',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          [this.ejs, this.express, this.node, this.mongodb, this.heroku],
          'https://immense-tor-42627.herokuapp.com/'
        )}
        {this.project(
          shopping,
          'Shopping List',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          [this.react, this.node, this.express, this.mysql, this.heroku],
          'https://radiant-atoll-73526.herokuapp.com/'
        )}
        {this.project(
          colorGame,
          'Color Game',
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          [this.javascript],
          ''
        )}
      </React.Fragment>
    );
  }
}

export default Projects;
