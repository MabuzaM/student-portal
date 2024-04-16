import React, { useEffect, useState } from 'react';
import '../Topic/Topic.scss';
import axios from 'axios';
import { Playlist } from '../Playlist/Playlist';
import { ModuleTopic, TopicLesson } from '@/app/utils/types'; 

export const Topic = ({selectedTopic = {}}) => {
  const { topic, topicLessons } = selectedTopic;
  const [topicLessonVideoLink, setTopicLessonVideoLink] = useState('');
  const [topicLessonTitle, setTopicLessonTitle] = useState('');


  useEffect(()=>{
    topicLessons?.map((topicLesson: TopicLesson) => {
      setTopicLessonTitle(topicLesson.topicLessonTitle);
      setTopicLessonVideoLink(topicLesson.topicVideoLink);
    })
  })

  return (
    <article className="Topic">
      <div className="Topic__headerWrapper">
        <div className="Topic__title">
          {topic}
        </div>

        <div className="Topic__lesson">
          {topicLessonTitle}
        </div>

        <button className="Topic__btn">
          Dashboard
        </button>
      </div>

      <div className="Topic__buttons">
        <button className="Topic__videos">
          Videos
        </button>

        <button className="Topic__theory">
          Theory
        </button>

        <button className="Topic__practice">
          Practice
        </button>
      </div>

      <div className="Topic__contentWrapper">
        <div className="Topic__content">
        <iframe
          className="Topic__content--video"
          src={topicLessonVideoLink}
          name={topicLessonTitle}
          title={topicLessonTitle}
        >
        </iframe>
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
