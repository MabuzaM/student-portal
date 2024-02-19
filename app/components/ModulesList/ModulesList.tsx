'use client';
import React, { useEffect, useState } from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';
import axios from 'axios';

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
        courses.map((course: 
          { 
            courseName: string,
            courseModules: { map: (arg0: (courseModule: any) => void) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; },
            courseSummary: string,
            courseManager: string,
            courseProgress: number
          }) => {
            const { courseName, courseModules } = course;
            return (
              <>
                <div className="ModuleList_controlWrapper" key={course.courseName}>
                  <div className="ModulesList_title">
                    {
                      courseName
                    }
                  </div>
                </div>

                {
                  courseModules.map((courseModule) => {
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
                          <TopicList moduleTopics={moduleTopics} /> 

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




