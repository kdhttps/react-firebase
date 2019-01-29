import React from 'react';
import {Link} from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {
        projects && projects.length
        ? projects.map((project) => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary key={project.id} project={project} />
            </Link>
          )
        })
        : null
      }
    </div>
  )
};

export default ProjectList;
