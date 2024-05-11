import react, { useEffect, useState } from 'react';
import './AddLesson.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule } from '@/app/utils/types';

export const AddLesson = ({courses = []}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [selectedModule, setSelectedModule] = useState<CourseModule>();
  const [selectedTopicName, setSelectedTopicName] = useState('');

  const handleCourseChange = (e) => {
    setSelectedCourse(courses.find((course: Course) => (
      course.courseName === e.target.value
    )));
  };

  const handleModuleChange = (event) => {
    setSelectedModule(selectedCourse?.courseModules.find((module: CourseModule) => (
      module.moduleId === event.target.value
    )));
  };

  const handleTopicChange = (e) => {
    setSelectedTopicName(e.target.value);
  }

  const onSubmit = async (data: {}) => {
    try {
      const newLesson = {
        ...data,
        moduleId: selectedModule?.moduleId,
        topic: selectedTopicName,
        topicLessonExtLinks: (data?.topicLessonExtLinks).split(';')
      }

      const response = await client.patch(`http://127.0.0.1:5000/addLessons/${selectedCourse?._id}`, { json: newLesson });
      // console.log(response);

      if (response.ok) {
        setSubmitError(false);
        setFeedback('Lesson successfully saved!');
      } else {
        setSubmitError(true);
        setFeedback(`Error saving the lesson! ${await response.text()}`);
      }
    } catch (error) {
      setSubmitError(true);
      setFeedback(`Error making the request ${error}`);
    }
  }

  return (
    <section className="AddCourse">
      <h2 className="AddCourse__heading">Add Lessons</h2>

      <form className="AddCourse__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="courseName" className="AddCourse__label">
          Select a Course:

          <select id="courseName" className="AddCourse__input" onChange={handleCourseChange}>
            <option value="" disabled selected>Select a Course</option>
            {
              courses.map((course: Course) => {
                
                return <option value={course.courseName} key={course.courseName}>{course.courseName}</option>
              })
            }
            
          </select>
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Module:

          {
            <select id="moduleName" className="AddCourse__input" onChange={handleModuleChange}>
              <option disabled value={''} selected>Select Module</option>
              {
                selectedCourse?.courseModules.map((courseModule) => (
                  <option value={courseModule.moduleId} key={courseModule.moduleName}>
                    {courseModule.moduleName}
                  </option>
                ))
              }
            </select>
          }
        </label>

        <label htmlFor="noduleTopic" className="AddCourse__label">
          Topic:
          {
            <select id="moduleTopic" className="AddCourse__input" onChange={handleTopicChange}>
              <option disabled value={''} selected>Select Topic</option>
              {
                  selectedModule?.moduleTopics.map((moduleTopic) => (
                      <option value={moduleTopic.topic} key={moduleTopic.topic}>
                        {moduleTopic.topic}
                      </option>
                    )
                  )
              }
            </select>
          }
        </label>

        <label htmlFor="topicLessonTitle" className="AddCourse__label">
          Lesson Title:
          <input type="text" id='topicLessonTitle' className="AddCourse__input" {...register('topicLessonTitle', {required: true})}/>
        </label>

        <label htmlFor="topicLessonNotes" className="AddCourse__label">
          Lesson Notes:
          <textarea
            id="topicLessonNotes"
            cols="30"
            rows="10"
            className="AddCourse__input"
            {...register('topicLessonNotes', {required: true})}
          ></textarea>
        </label>

        <label htmlFor="topicLessonExtLinks" className="AddCourse__label">
          External Links:
          <input type="text" id='topicLessonExtLinks' className="AddCourse__input" placeholder='Enter external links, separated by a semi-colon (;)'{...register('topicLessonExtLinks', {required: true})}/>
        </label>

        <label htmlFor="topicLessonVideoLink" className="AddCourse__label">
          Video Link:
          <input type="text" id='topicLessonVideoLink' className="AddCourse__input" placeholder='Enter a video link'{...register('topicLessonVideoLink', {required: true})}/>
        </label>

        {
          feedback && (
            <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
              {feedback}
            </p>
          )
        }

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Lesson</button>
          <button type='button' className="AddCourse__addTopic">Update Lesson</button>
        </div>
      </form>
    </section>
  )
}
