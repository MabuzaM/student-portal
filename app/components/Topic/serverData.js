import react, { useEffect, useState } from 'react';
import axios from 'axios';

const [courses, setCourses] = useState([]);


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
        setTopicLessons([...topicLessons]);
        console.log(topicLessons);

        topicLessons.map((topicLesson) => {
          setTopicLessonTitle(topicLesson.topicLessonTitle);
          setLessonVideoLink(topicLesson.topicVideoLink);
        })
      })
    ))
  ))
}, [courses, topic]);
