import React from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';

export const ModulesList = () => {
  return (
    <article className="ModulesList">
      <div className="ModuleList_controlWrapper">
        <div className="ModulesList_title">
          Systems Development NQF5
        </div>

        <div className="ModulesList_title">
          Systems Development NQF5
        </div>

        {/* <button className="ModuleList_btn">
          Dashboard
        </button> */}
      </div>

      <div className="ModuleInfo">
        <div className="ModuleInfo_progress">
          50%
        </div>

        <div className="ModuleInfo_details">
          <div className="ModuleInfo_wrapper">
            <p className="ModuleInfo_name">Web Development</p>
            <p className="ModuleInfo_instructor">Instructor: M Ncube</p>
          </div>

          <p className="ModuleInfo_summary">
            In this module, you will learn about how to transform a website designed in Figma or photoshop into a working website. You will enjoy learning about and using modern web development technologies such as HTML5, CSS3, SASS, JavaScript. At the end of this module, you will be able to develop and deploy your own portfolio website where you will showcase all your projects you have completed during your study time at Asher Academy. And of course, any other projects you complete on your own and would like prospective employers to know about. Happy coding.
          </p>

          <div className="ModuleInfo_dropdown">
            <p className="ModuleInfo_text">
              Show Topics
            </p>

            <Image
              src={arrow}
              alt="drop down"
              className="ModuleInfo_arrow"
            />
          </div>

          <TopicList />
        </div>
      </div>
    </article>
  );
};
