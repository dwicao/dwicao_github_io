import React, { Component } from 'react';
import axios from 'axios';

import NavLink from './NavLink';
import ProjectsList from './ProjectsList';


class Projects extends Component {
  constructor(props) {
    super(props);
      this.state = {
        dataRepos: []
      }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dwicao/repos')
      .then(res => {
        const dataRepos = res.data.filter(obj => obj.homepage == undefined || obj.homepage.length < 1 ? false : true);
        this.setState({ dataRepos });
      })
      .catch(err => { throw(err) });
  }

  render() {
    return (
      <div className="main-content">
        <div className="group">
          <h2>My Projects</h2>
          <ProjectsList
            dataRepos={this.state.dataRepos} />
        </div>
      </div>
    );
  }
}

export default Projects;