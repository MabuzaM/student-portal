import React, { useEffect, useState } from 'react';
import '../Topic/Topic.scss';
import axios from 'axios';
import { Playlist } from '../Playlist/Playlist';
import { Course, CourseModule, LessonTask, ModuleTopic, TopicLesson } from '@/app/utils/types'; 
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Ide } from '../Ide/Ide';
import { CodeEditorAndRunner } from '../CodeEditorAndRunner/CodeEditorAndRunner';

interface TopicProps {
    selectedModule: CourseModule
    selectedTopic: ModuleTopic;
    topicLesson: TopicLesson;
    course: Course | null;
}

const shuffleArray = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const checkAnswerType = (answerType: string) => {
  switch (answerType) {
    case 'multiple':
      return 'checkBox';

    case 'single':
      return 'radio';

    case 'text':
      return 'text';

    default:
      return '';    
  }
}

const initialCode =
`<!Doctype html>
<html>
  <head>
  </head>
  
  <body>
  </body>
</html>
`;

export const Topic: React.FC<TopicProps> = ({selectedModule = { moduleName: '', moduleSummary: ''}, selectedTopic, topicLesson, course}) => {
  // const { topic, topicLessons, topicNotes } = selectedTopic;
  const [topicLessonVideoLink, setTopicLessonVideoLink] = useState<String[]>();
  const [topicLessonTitle, setTopicLessonTitle] = useState('');
  const [activatePane, setActivatePane] = useState('videoPane');

  useEffect(()=>{
    // selectedTopic?.topicLessons.map((topicLesson: TopicLesson) => {
    //   setTopicLessonTitle(topicLesson.topicLessonTitle);
    //   setTopicLessonVideoLink(topicLesson.topicLessonVideoLink);
    // })
  })

  const handlePaneSwitch = (pane: string) => {
    setActivatePane(pane);
  };

  const { moduleName, moduleSummary } = selectedModule;

  const defaultModuleName: String | undefined = course?.courseModules[0].moduleName;
  const defaultModuleSummary: String | undefined = course?.courseModules[0].moduleSummary;

  return (
    <article className="Topic">
      <h3>About the Course</h3>         
      <div className="Topic__course-details">
        <p className='Topic__course-description'>{course?.courseSummary}</p>

        <h3 className="Topic__module-title"></h3>
        <p className="Topic__module-title"></p>
      </div>

      <h5>About this Module - { moduleName ? moduleName : defaultModuleName }</h5>         
      <div className="Topic__course-details">
        <p className='Topic__course-description'>{ moduleSummary ? moduleSummary : defaultModuleSummary }</p>

        <h3 className="Topic__module-title"></h3>
        <p className="Topic__module-title"></p>
      </div>
      {
        selectedTopic &&
            <div id="content" className="Topic__headerWrapper">
          
            <div className="Topic__title">
              {selectedTopic?.topic}
            </div>

            <div className="Topic__lesson">
              {topicLesson?.topicLessonTitle}
            </div>
          </div>
      }
      

      {selectedTopic && <div className="Topic__contentWrapper">
        <div className="Topic__content">
          <p>
            {topicLesson?.topicLessonNotes}
          </p>

          <p>Here is more resources to read</p>
          {
            topicLesson?.topicLessonExtLinks.map((link) => (
              <><a href={link} key={link}>{link}</a><br/></>
            ))
          }

          <hr />

          <div className="Topic__lesson-video-wrapper">
            <ReactPlayer
              url={topicLesson.topicLessonVideoLink && topicLesson.topicLessonVideoLink[0]}
              controls
              width="100%"
            />
          </div>

          <hr />

          <h4>Practice</h4>

          <div className="Topic__practice-wrapper">
            <Ide initialCode={initialCode}/>
          </div>

          <hr />
          
              <div className="Topic__lessonTasks">
                <h4>Skill Check</h4>

                <form className='Topic__lessonTasks-content'>
                {
                  topicLesson?.topicLessonTasks && topicLesson?.topicLessonTasks.map((lessonTask) => (
                    <>
                    <p key={lessonTask._id.toString()}>
                      {lessonTask.lessonTaskQuestion}
                    </p>

                    {
                      lessonTask.lessonTaskType === 'coding' && (<CodeEditorAndRunner />)
                    }

                    {
                      lessonTask.lessonTaskType === 'short' &&
                        shuffleArray([...lessonTask.lessonTaskAnswerOptions]).map((option, index) => (
                          <label htmlFor={option.concat(index.toString())} key={option.concat(index.toString())}>
                            <input type={checkAnswerType(lessonTask.lessonTaskAnswerType)} id={option.concat(index.toString())} value={option || ''} name={lessonTask._id.toString()}/>
                            {option}
                          </label>
                        
                      ))                      
                    }

                    {
                      lessonTask.lessonTaskType === 'long' &&
                        <textarea name="" id=""></textarea>
                    }
                    </>
                  ))
                }
                </form>
               
              </div>
      </div>
      </div>}
    </article>
  );
};
