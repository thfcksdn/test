import React from 'react';
import './Project.css';
import PROJECT_DATA from '../projectData.js';
import ProjectItem from './ProjectItem';

const Project = (props) => {
  return (
    <>
      <div id={props.NarBarTitle[2]} className="projects-container">
        <h2
          id={props.NarBarTitle}
          key={props.NarBarTitle}
          className="part-title project-hr"
        >
          {props.NarBarTitle[2]}
          <em className="fab fa-pagelines"></em>
        </h2>
        {PROJECT_DATA.map((item) => (
          <ProjectItem projectContent={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Project;
