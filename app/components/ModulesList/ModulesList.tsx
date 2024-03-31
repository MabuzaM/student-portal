'use client';
import React, { useEffect, useState } from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';
import axios from 'axios';
import { Course, CourseModule, ModuleTopic } from '@/app/utils/types';

export const ModulesList = () => {
   const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getCourses')
    .then((courses) => {
      setCourses(courses.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <article className="ModulesList">
      {
        courses.map((course: Course) => {
            const { courseName, courseModules, courseSummary, courseProgress } = course;

            return (
              <>
                <div className="Course_controlWrapper" key={courseName}>
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
                  courseModules.map((courseModule: CourseModule) => {
                    const {
                      moduleName,
                      moduleTutor,
                      moduleInstructor,
                      moduleSummary,
                      moduleProgress,
                      moduleTopics
                    } = courseModule;

                    return(
                      <div className="ModuleInfo" key={moduleName}>
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
                                    console.log(courses);
                                    return (
                                      <tr className="TopicList_row" key={index}>
                                        <div className="TopicList_name">
                                          <td className="TopicList_column">{index++}</td>
                                          <td className="TopicList_column">{topic}</td>
                                        </div>

                                        <div className="TopicList_progress">
                                          <td className="TopicList_column">{topicProgress}</td>
                                          <td className="TopicList_column">
                                            <div className="TopicList_color TopicList_progress--green"></div>
                                          </td>
                                        </div>
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




