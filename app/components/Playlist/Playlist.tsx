import react from 'react';

export const Playlist = ({moduleTopics = []}) => {
  return (
    <ul className="Topic__playlist-list">
    {   
      moduleTopics.map((moduleTopic: any) => (
        moduleTopic.topicLessons.map((topicLesson: any, index: number) => {
          console.log(moduleTopic.topicLessons);
          return (
            <li className="Topic__playlist-item" key={index}>
              <a href={""} className="Topic__playlist-link" target={topicLesson.topicVideoLink}>{topicLesson.topicLessonTitle}</a>
            </li>
          );
        })
      ))
    }
  </ul>

  );
}
