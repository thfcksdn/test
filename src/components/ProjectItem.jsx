import React from 'react';
import './Project.css';
import Carousel from './Carousel';

const ProjectItem = ({ projectContent }) => {
  return (
    <div className="project-wrap">
      <p>{projectContent.miniTitle}</p>
      <h2 className="project-title">{projectContent.title}</h2>
      <div className="project-content flex-box center-box">
        <Carousel className="project-image" images={projectContent.images} />
        <div className="project-detail flex-box">
          <div className="detail-story">
            <p className="left-text">
              {projectContent.content1}
              <br />
              {projectContent.content2}
            </p>
          </div>
          <div className="detail-type flex-box">
            <ul className="list-left project-detail-skills-ui left-text">
              <li className="detail-title">주요기능 </li>
              <li className="detail-skill-li">Front-end </li>
              <li className="detail-skill-li">Back-end </li>
              {/* <li className="detail-skill-li">Web-Site or detailContent </li> */}
            </ul>
            <ul className="list-right project-detail-skills-ui left-text">
              <li className="detail-title">{projectContent.coreFunction}</li>
              <li className="detail-skill-li">{projectContent.frontSkills}</li>
              <li className="detail-skill-li">{projectContent.backSkills}</li>
              {/* <li className="detail-skill-li">
                <a href={projectContent.blogUrl}>{projectContent.blog}</a>
              </li> */}
              {/* <li className='left-text url-wrap' onClick={() =>{}}> */}
                {/* <p onClick={() =>{}}>보드살롱 블로그</p> */}
                {/* <a href="#">보드살롱 블로그 <p className='websiteUrl'>{projectContent.websiteUrl}</p></a> */}
                {/* <a href={projectContent.websiteUrl}>{projectContent.title}</a> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
