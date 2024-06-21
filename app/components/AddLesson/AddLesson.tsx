import react, { useEffect, useState } from 'react';
import './AddLesson.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, Employee } from '@/app/utils/types';
import { AsideMenu } from '../Asidemenu/AsideMenu';

interface AddLessonProps {
  courses: Course[],
  staff: Employee
}

export const AddLesson: React.FC<AddLessonProps> = ({courses, staff}) => {
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
    <section className="AddLesson">
      {staff && (<AsideMenu />)}

      <div className="AddLesson__wrapper">
        <h2 className="AddLesson__heading">Add Lessons</h2>

        <form className="AddLesson__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="courseName" className="AddLesson__label">
            Select a Course:

            <select id="courseName" className="AddLesson__input" onChange={handleCourseChange}>
              <option value="" disabled selected>Select a Course</option>
              {
                courses.map((course: Course) => {
                  
                  return <option value={course.courseName} key={course.courseName}>{course.courseName}</option>
                })
              }
              
            </select>
          </label>

          <label htmlFor="moduleName" className="AddLesson__label">
            Module:

            {
              <select id="moduleName" className="AddLesson__input" onChange={handleModuleChange}>
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

          <label htmlFor="noduleTopic" className="AddLesson__label">
            Topic:
            {
              <select id="moduleTopic" className="AddLesson__input" onChange={handleTopicChange}>
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

          <label htmlFor="topicLessonTitle" className="AddLesson__label">
            Lesson Title:
            <input type="text" id='topicLessonTitle' className="AddLesson__input" {...register('topicLessonTitle', {required: true})}/>
          </label>

          <label htmlFor="topicLessonNotes" className="AddLesson__label">
            Lesson Notes:
            <textarea
              id="topicLessonNotes"
              cols="30"
              rows="10"
              className="AddLesson__input"
              {...register('topicLessonNotes', {required: true})}
            ></textarea>
          </label>

          <label htmlFor="topicLessonExtLinks" className="AddLesson__label">
            External Links:
            <input type="text" id='topicLessonExtLinks' className="AddLesson__input" placeholder='Enter external links, separated by a semi-colon (;)'{...register('topicLessonExtLinks', {required: true})}/>
          </label>

          <label htmlFor="topicLessonVideoLink" className="AddLesson__label">
            Video Link:
            <input type="text" id='topicLessonVideoLink' className="AddLesson__input" placeholder='Enter a video link'{...register('topicLessonVideoLink', {required: true})}/>
          </label>

          {
            feedback && (
              <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
                {feedback}
              </p>
            )
          }

          <div className="AddLesson__button-group">
            <button type='submit' className="AddLesson__submit">Save Lesson</button>
            <button type='button' className="AddLesson__addTopic">Update Lesson</button>
          </div>
        </form>
      </div>
    </section>
  )
}
