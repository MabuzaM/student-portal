'use client';
import React, { useEffect, useState } from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';
import axios from 'axios';
import { Course, CourseModule, ModuleTopic } from '@/app/utils/types';

export const ModulesList = ({courses = []}) => {
   //const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:3001/getCourses')
  //   .then((courses) => {
  //     setCourses(courses.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  return (
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

                    <div className="Course_progress">{courseProgress}%</div>
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
                        <div className="ModuleInfo_progress">
                          {
                            moduleProgress
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
                          <article className="TopicList">
                            <table className="TopicList_table">
                              <tbody>
                                {
                                  moduleTopics.map((moduleTopic: ModuleTopic, index: number) => {

                                    const { topic, topicProgress } = moduleTopic;
                                    return (
                                      <tr className="TopicList_row" key={topic.slice(0, 4) + index}>
                                        <td className="TopicList_name">
                                          <span className="TopicList_column">{index++}</span>
                                          <span className="TopicList_column">{topic}</span>
                                        </td>

                                        <td className="TopicList_progress">
                                          <span className="TopicList_column">{topicProgress}</span>
                                          <span className="TopicList_column">
                                          <div className="TopicList_color TopicList_progress--green"></div>
                                          </span>
                                        </td>
                                      </tr>
                                    );
                                    })
                                }
                              </tbody>   
                            </table>
                          </article>

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
  )
}




