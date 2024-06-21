import react, { useEffect, useState } from 'react';
import './AddTopic.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, Employee } from '@/app/utils/types';
import { NavLink } from 'react-router-dom';
import { AsideMenu } from '../Asidemenu/AsideMenu';

interface AddTopicProps {
  courses: Course[],
  staff: Employee
}

export const AddTopic: React.FC<AddTopicProps> = ({courses, staff}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [selectedCourse, setSelectedCourse] = useState<Course | object>();
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleCourseChange = (e) => {
    setSelectedCourse(courses.find((course: Course) => (
      course.courseId === e.target.value
    )));
  };

  const handleModuleChange = (e) => {
    setSelectedModuleId(e.target.value);
  };

  const onSubmit = async (data: {}) => {
    try {
      const newModuleTopic = {
          topic: data?.topicTitle,
          topicLessons: [],
          topicProgress: 0,
          topicNotes: {},
          moduleId: selectedModuleId
      }

      console.log(newModuleTopic.moduleId);

      const response = await client.patch(`http://127.0.0.1:5000/addTopics/${selectedCourse?._id}`, { json: {...newModuleTopic} });
      if (response.ok) {
        setSubmitError(false);
        setFeedback('Topic successfully added!');
      } else {
        setSubmitError(true);
        setFeedback(`Error adding the topic! ${await response.text()}`);
      }
    } catch (error) {
      setSubmitError(true);
      setFeedback(`Error making the request ${error}`);
    }
  }

  return (
    <section className="AddTopics">
      {staff && (<AsideMenu />)}

      <div className="AddTopics__wrapper">
        <h2 className="AddTopics__heading">Add Topics</h2>

        <form className="AddTopics__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="courseName" className="AddTopics__label">
            Select a Course:
            <select id="courseName" className="AddTopics__input" onChange={handleCourseChange} hidden >
              <option value="" disabled selected>Select a Course</option>
              {
                courses.map((course: Course) => {                
                  return <option value={course.courseId} key={course.courseName}>{course.courseName}</option>
                })
              }
              
            </select>
          </label>

          <label htmlFor="moduleName" className="AddTopics__label">
            Module:

            {
              <select id="moduleName" className="AddTopics__input" onChange={handleModuleChange}>
                <option value="" disabled selected>Select Module</option>
                {
                  selectedCourse?.courseModules.map((courseModule) => (
                    selectedCourse.courseModules.some((module) => module.moduleName === courseModule.moduleName) &&<option value={courseModule.moduleId} key={courseModule.moduleName}>
                      {courseModule.moduleName}
                    </option>
                  ))
                }
              </select>
            }
          </label>

          <label htmlFor="topic" className="AddTopics__label">
            Topic Title:
            <input type="text" id='topic' className="AddTopics__input" {...register('topicTitle', {required: true})}/>
          </label>

          {
            feedback && (
              <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
                {feedback}
              </p>
            )
          }

          <div className="AddTopics__button-group">
            <button type='submit' className="AddTopics__submit">Save Topic</button>
            <NavLink to={'/lessons'}><button type='button' className="AddTopics__addTopic">Add Lessons</button></NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}
