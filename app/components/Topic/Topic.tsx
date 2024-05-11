import React, { useEffect, useState } from 'react';
import '../Topic/Topic.scss';
import axios from 'axios';
import { Playlist } from '../Playlist/Playlist';
import { ModuleTopic, TopicLesson } from '@/app/utils/types'; 
import { NavLink } from 'react-router-dom';

export const Topic = ({selectedTopic = {}}) => {
  const { topic, topicLessons, topicNotes } = selectedTopic;
  const [topicLessonVideoLink, setTopicLessonVideoLink] = useState('');
  const [topicLessonTitle, setTopicLessonTitle] = useState('');
  const [activatePane, setActivatePane] = useState('videoPane');


  useEffect(()=>{
    topicLessons?.map((topicLesson: TopicLesson) => {
      setTopicLessonTitle(topicLesson.topicLessonTitle);
      setTopicLessonVideoLink(topicLesson.topicVideoLink);
    })
  })

  const handlePaneSwitch = (pane: string) => {
    setActivatePane(pane);
  };

  return (
    <article className="Topic">
      <div className="Topic__headerWrapper">
        <div className="Topic__title">
          {topic}
        </div>

        <div className="Topic__lesson">
          {topicLessonTitle}
        </div>

        <NavLink to="/">
          <button className="Topic__btn" >
            Dashboard
          </button>
        </NavLink>
      </div>

      <div className="Topic__buttons">
          <button className="Topic__videos" onClick={() => {handlePaneSwitch('videoPane')}}>
            Videos
          </button>

          <button className="Topic__theory" onClick={() => {handlePaneSwitch('notesPane')}}>
            Theory
          </button>

          <button className="Topic__practice" onClick={() => {handlePaneSwitch('practicePane')}}>
            Practice
          </button>
      </div>

      <div className="Topic__contentWrapper">
        <div className="Topic__content">
        <iframe
          className={`"Topic__content--video" ${activatePane === 'videoPane' ? 'Topic__content--active' : 'Topic__content--hidden'}`}
          src={topicLessonVideoLink}
          name={topicLessonTitle}
          title={topicLessonTitle}
          id='video'>
        </iframe>

        <div className={`"Topic__content--notes" ${activatePane === 'notesPane' ? 'Topic__content--active' : 'Topic__content--hidden'}`} id='notes'>
          {topicNotes?.notes} <br />
          {topicNotes?.externalLinks?.map((externalLink) => (
          externalLink.link
        ))}
        </div>
        <div className={`"Topic__content--practice" ${activatePane === 'practicePane' ? 'Topic__content--active' : 'Topic__content--hidden'}`} id='practice'></div>
        </div>

        <div className="Topic__playlist">
          <h3 className="Topic__playlist--title">Playlist / Links</h3>
          <ul>
            {topicLessons?.map((topicLesson: TopicLesson) => {
              return(
                <li key={topicLesson.topicLessonTitle}>
                  {topicLesson.topicLessonTitle}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};
