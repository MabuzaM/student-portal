'use client';
import React, { useEffect, useState } from 'react';
import './ModulesList.scss';
import Image from 'next/image';
import arrow from './assets/dropdownArrow.png';
import { TopicList } from '../TopicList/TopicList';
import { Course, CourseModule, ModuleTopic, Student, TopicLesson } from '@/app/utils/types';
import { changeProgressBackground } from '@/app/utils/handlerFunctions';
import { Topic } from '../Topic/Topic';
import { Accordion } from 'react-bootstrap';

interface ModulesListProps {
  user: Student | null;
  courses: Course[] | [];
}

export const ModulesList: React.FC<ModulesListProps> = ({courses, user}) => {
  const [selectedTopic, setSelectedTopic] = useState<ModuleTopic>();
  const [topicLesson, setTopicLesson] = useState<TopicLesson>();
  // const [showTopic, setShowTopic] = useState(false);
  const [showModuleSummary, setShowModuleSummary] = useState(false);
  const [selectedModule, setSelectedModule] = useState<CourseModule>();
  // const [selectedCourse, setSelectedCourse] = useState('');
  // const [showCourseInfo, setShowCourseInfo] = useState(false);
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    setCourse(courses.find((course: Course) => course.courseName === user?.courseName));
  }, [user]);

  const getSelectedTopic = (topic: ModuleTopic) => {
    setSelectedTopic({...topic});
  }

  // const handleShowTopic = (topicListStatus: boolean, selectedModuleName: string) => {
  //   setTopicListShown(topicListStatus);
  //   setSelectedModule(selectedModuleName);
  // }

  return (
    <div className='Learn'>
      <article className="ModulesList">
      <div className="Course_title">
        {course?.courseName}

        <div
          className="Course_progress"
          style={{ backgroundColor: changeProgressBackground(course?.courseProgress) }}
        >
            {0 | course?.courseProgress}%
        </div>
      </div>

      {

        <Accordion defaultActiveKey="0">
        {
          course?.courseModules.map((courseModule: CourseModule) => (
            <Accordion.Item eventKey={courseModule.moduleName} key={courseModule.moduleName}>
              <Accordion.Header className="ModulesList__header">{courseModule.moduleName}</Accordion.Header>
              <Accordion.Body className='ModulesList__body'>
                {courseModule.moduleTopics.map((moduleTopic) => {
                  return (
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item eventKey={moduleTopic.topic} key={moduleTopic.topic}>
                        <Accordion.Header className='ModulesList__topicName'>{moduleTopic.topic}</Accordion.Header>
                        <Accordion.Body className='ModulesList__topicLessons'>
                          {
                            moduleTopic.topicLessons.map((topicLesson) => (
                              <li
                                key={topicLesson.topicLessonTitle}
                                onClick={() => {
                                  setTopicLesson(topicLesson)
                                  setSelectedTopic(moduleTopic)
                                  setSelectedModule(courseModule)
                                }}
                                className='ModulesList__list'
                              >
                                <a href="#/learn" className='ModulesList__link'>
                                  {topicLesson.topicLessonTitle}
                                </a>
                              </li>
                            ))
                          }
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  )
                })}
              </Accordion.Body>
          </Accordion.Item>
          ))
        }
        </Accordion>
      
      }
      </article>
      <Topic
        selectedModule={selectedModule}
        selectedTopic={selectedTopic}
        topicLesson={topicLesson}
        course={course}
      />
    </div>
  )
}




