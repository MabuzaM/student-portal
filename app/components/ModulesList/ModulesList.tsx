'use client';
import React, { useEffect, useState } from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';
import { Course, CourseModule, ModuleTopic } from '@/app/utils/types';
import { changeProgressBackground } from '@/app/utils/handlerFunctions';
import { Topic } from '../Topic/Topic';

export const ModulesList = ({courses = []}) => {
  const [selectedTopic, setSelectedTopic] = useState<ModuleTopic>();

  const getSelectedTopic = (topic: ModuleTopic) => {
    setSelectedTopic({...topic});
  }
  return (
    <>
    <Topic selectedTopic={selectedTopic}/>
    <article className="ModulesList">
      {
        courses.map((course: Course, index) => {
            const { courseName, courseModules, courseSummary, courseProgress } = course;
              
            return (
              <>
                <div className="Course_controlWrapper" key={courseName.slice(0, 4) + index}>
                  <div className="Course_title">
                    {
                      courseName
                    }

                    <div
                      className="Course_progress"
                      style={{ backgroundColor: changeProgressBackground(courseProgress) }}
                    >{0 | courseProgress}%</div>
                  </div>

                  <div className="Course_summary">
                    {
                      courseSummary
                    }
                  </div>
                </div>

                {
                  courseModules.map((courseModule: CourseModule, index) => {
                    const {
                      moduleName,
                      moduleTutor,
                      moduleInstructor,
                      moduleSummary,
                      moduleProgress,
                      moduleTopics
                    } = courseModule;

                    return(
                      <div className="ModuleInfo" key={moduleName.slice(0,3) + index}>
                        <div
                          className="ModuleInfo_progress"
                          style={{ backgroundColor: changeProgressBackground(moduleProgress) }}
                        >
                          {
                            0 | moduleProgress
                          }
                        </div>
    
                        <div className="ModuleInfo_details">
                          <div className="ModuleInfo_wrapper">
                            <p className="ModuleInfo_name">
                              {
                                moduleName
                              }
                            </p>

                            <p className="ModuleInfo_instructor">
                              {
                                moduleInstructor
                              }
                            </p>
                          </div>
      
                          <p className="ModuleInfo_summary">
                            {
                              moduleSummary
                            }
                          </p>

                          <div className="ModuleInfo_dropdown">
                            <p className="ModuleInfo_text">
                              Show Topics
                            </p>
      
                            <Image
                              src={arrow}
                              alt="drop down"
                              className="ModuleInfo_arrow" />
                          </div>
                          <TopicList
                            moduleTopics={moduleTopics}
                            selectedTopic={selectedTopic}
                            onTopicClick={getSelectedTopic}
                          />

                        </div>        
                      </div>
                    );
                  })
                }
              </>
            )
          }
        )
      }
    </article>
    </>
  )
}




