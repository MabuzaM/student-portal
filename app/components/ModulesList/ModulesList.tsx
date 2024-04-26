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
  const [showTopic, setShowTopic] = useState(false);
  const [showModuleSummary, setShowModuleSummary] = useState(false);
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showCourseInfo, setShowCourseInfo] = useState(false);

  const getSelectedTopic = (topic: ModuleTopic) => {
    setSelectedTopic({...topic});
  }

  // const handleShowTopic = (topicListStatus: boolean, selectedModuleName: string) => {
  //   setTopicListShown(topicListStatus);
  //   setSelectedModule(selectedModuleName);
  // }

  return (
    <>
      <Topic selectedTopic={selectedTopic}/>
      <article className="ModulesList">
        {
          courses.map((course: Course, index) => {
              const { courseName, courseModules, courseSummary, courseProgress } = course;
                
              return (
                <>
                  <div
                    className="Course_controlWrapper"
                    key={courseName.slice(0, 4) + index}
                    onClick={() => {setShowCourseInfo(!showCourseInfo); setSelectedCourse(courseName)}}
                  >
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

                  {showCourseInfo && selectedCourse == courseName &&
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
                            <div className="ModuleInfo_wrapper" onClick={() => {setShowModuleSummary(!showModuleSummary); setSelectedModule(moduleName)}}>
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
                                showModuleSummary && selectedModule == moduleName && moduleSummary
                              }
                            </p>

                            <button
                              className="ModuleInfo_dropdown"
                              onClick={() => {
                                setShowTopic(!showTopic)
                                setSelectedModule(moduleName)
                              }}>
                                {
                                  showTopic
                                    && selectedModule == moduleName
                                    ? 'Hide Topics' : 'Show Topics'
                                }
                              <Image
                                src={arrow}
                                alt="drop down"
                                className="ModuleInfo_arrow" />
                            </button>
                            {
                              showTopic && selectedModule == moduleName && <TopicList
                              moduleTopics={moduleTopics}
                              selectedTopic={selectedTopic}
                              onTopicClick={getSelectedTopic}
                              moduleName={selectedModule}
                            /> 
                          }

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




