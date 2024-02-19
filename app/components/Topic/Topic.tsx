import React, { useEffect, useState } from 'react';
import '../Topic/Topic.scss';
import axios from 'axios';

export const Topic = () => {
  const [courses, setCourses] = useState([]);
  const [topic, setTopic] = useState("");
  const [topicLessonTitle, setTopicLessonTitle] = useState("");
  const [topicLessons, setTopicLessons] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getCourses')
    .then((courses) => {
      setCourses(courses.data);
    })
    .catch((err) => {
      console.log(err);
    })

    courses.map((course) => (
      course.courseModules.map((courseModule) => (
        courseModule.moduleTopics.map((moduleTopic) => {
          const {
            topic,
            topicLessons,
            topicNotes
          } = moduleTopic;

          setTopic(topic);
          setTopicLessons(topicLessons);

          topicLessons.map((topicLesson) => {
            setTopicLessonTitle(topicLesson.topicLessonTitle);
          })
        })
      ))
    ))
  }, [courses, topicLessons, topic, topicLessonTitle]);
  
  return (
    <article className="Topic">
      <div className="Topic__headerWrapper" key={topic}>
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
                      src="https://youtube.com/embed/uEwZOQfcTys">
                    </iframe>
                    </div>

                    <div className="Topic__playlist">
                      <h3 className="Topic__playlist--title">Playlist / Links</h3>

                      <ul className="Topic__playlist-list">
                        {
                          topicLessons.map((topicLesson: any) => {
                            return (
                              <li className="Topic__playlist-item" key={topicLesson.topicLessonTitle}>
                                <a href="#" className="Topic__playlist-link">{topicLesson.topicLessonTitle}</a>
                              </li>
                            );
                          })
                        }
                      </ul>
                    </div>
                  </div>

    </article>
  );
};
