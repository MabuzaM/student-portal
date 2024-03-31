import React, { useEffect, useState } from 'react';
import '../Topic/Topic.scss';
import axios from 'axios';
import { Playlist } from '../Playlist/Playlist';
import { ModuleTopic } from '@/app/utils/types'; 

export const Topic = () => {
  // const { topic, topicProgress } = moduleTopic;
  return (
    <article className="Topic">
      <div className="Topic__headerWrapper">
        <div className="Topic__title">
          {/*topic*/}
        </div>
            
        <div className="Topic__lesson">
          {/* {topicLessons} */}
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
          // src={lessonVideoLink}
          // name={lessonVideoLink}
          // title={topicLessonTitle}
        >
        </iframe>
        </div>

        <div className="Topic__playlist">
          <h3 className="Topic__playlist--title">Playlist / Links</h3>
        </div>
      </div>
    </article>
  );
};
