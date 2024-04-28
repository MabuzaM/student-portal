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

  const handleCourseChange = (e) => {
    const selectedCourseData = courses.find((course: Course) => (
      course.courseName === e.target.value
    ));

    setCourseModules(selectedCourseData
      ? selectedCourseData
      .courseModules 
      : []
    );
  };

  const onSubmit = async (data: {}) => {
    try {
      const response = await client.post('http://127.0.0.1:5000/courses/modules', { json: data });
      console.log(response);

      if (response.ok) {
        console.log('Module successfully saved!');
      } else {
        console.log('Error submitting module data!', await response.text());
      }
    } catch (error) {
      console.log('Error making the request', error);
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
                
                return <option value={course.courseName} key={course.courseName}>{course.courseName}</option>
              })
            }
            
          </select>
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Module:

          {
            <select id="moduleName" className="AddCourse__input" {...register('moduleName', {required: true})}>
              <option value="" disabled selected>Select Module</option>
              {
                courseModules.map((courseModule) => (
                  <option value={courseModule.moduleName} key={courseModule.moduleName}>
                    {courseModule.moduleName}
                  </option>
                ))
              }
            </select>
          }
        </label>

        <label htmlFor="topicTitle" className="AddCourse__label">
          Topic Title:
          <input type="text" id='topicTitle' className="AddCourse__input" {...register('topicTitle', {required: true})}/>
        </label>

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Topic</button>
          <NavLink to={'/lessons'}><button type='button' className="AddCourse__addTopic">Add Lessons</button></NavLink>
        </div>
      </form>
    </section>
  )
}
