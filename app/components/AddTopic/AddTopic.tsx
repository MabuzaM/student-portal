import react, { useEffect, useState } from 'react';
import './AddTopic.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule } from '@/app/utils/types';
import { NavLink } from 'react-router-dom';

export const AddTopic = ({courses = []}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [courseModules, setCourseModules] = useState<CourseModule[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [selectedModule, setSelectedModule] = useState<CourseModule>();
  const [selectedModuleId, setSelectedModuleId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleCourseChange = (e) => {
    setSelectedCourse(courses.find((course: Course) => (
      course.courseId === e.target.value
    )));
  };

  const handleModuleChange = (e) => {
    setSelectedModule(selectedCourse?.courseModules.find((courseModule) => (courseModule.moduleId === e.target.value)));
  };

  const onSubmit = async (data: {}) => {
    try {
      const updatedModule = {
        ...selectedModule,
        moduleTopics: [...selectedModule?.moduleTopics, {
          topic: data?.topicTitle,
          topicLessons: [],
          topicProgress: 0,
          topicNotes: {}
      }]}

      console.log(updatedModule);

      const response = await client.patch(`http://127.0.0.1:5000/courses/modules/${selectedCourse._id}`, { json: updatedModule });
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
    <section className="AddCourse">
      <h2 className="AddCourse__heading">Add Topics</h2>

      <form className="AddCourse__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="courseName" className="AddCourse__label">
          Select a Course:

          <select id="courseName" className="AddCourse__input" onChange={handleCourseChange} hidden >
            <option value="" disabled selected>Select a Course</option>
            {
              courses.map((course: Course) => {                
                return <option value={course.courseId} key={course.courseName}>{course.courseName}</option>
              })
            }
            
          </select>
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Module:

          {
            <select id="moduleName" className="AddCourse__input" onChange={handleModuleChange}>
              <option value="" disabled defaultValue={''}>Select Module</option>
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

        <label htmlFor="topic" className="AddCourse__label">
          Topic Title:
          <input type="text" id='topic' className="AddCourse__input" {...register('topicTitle', {required: true})}/>
        </label>

        {
          feedback && (
            <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
              {feedback}
            </p>
          )
        }

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Topic</button>
          <NavLink to={'/lessons'}><button type='button' className="AddCourse__addTopic">Add Lessons</button></NavLink>
        </div>
      </form>
    </section>
  )
}
