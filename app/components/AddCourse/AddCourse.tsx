import react, { useState } from 'react';
import './AddCourse.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { CourseModule } from '@/app/utils/types';

export const AddCourse = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [courseModules, setCourseModules] = useState<CourseModule[]>([]);
  const [moduleName, setModuleName] = useState('');

  const addCourseModules = () => {
    setCourseModules([...courseModules, {
      moduleName: moduleName,
      moduleInstructor: '',
      moduleTutor: '',
      moduleProgress: 0,
      moduleSummary: '',
      moduleTopics: []
    }])

    setModuleName('');
  }

  console.log(moduleName)
  console.log(courseModules)

  const onSubmit = async (data: {}) => {
    try {
      const response = await client.post('http://127.0.0.1:5000/courses/', { json: {...data, courseModules} });
      console.log(response);

      if (response.ok) {
        console.log('Course successfully saved!');
      } else {
        console.log('Error submitting employee data!', await response.text());
      }
    } catch (error) {
      console.log('Error making the request', error);
    }
  }

  return (
    <section className="AddCourse">
      <h2 className="AddCourse__heading">Add Courses</h2>

      <form className="AddCourse__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="courseName" className="AddCourse__label">
          Course Name:
          <input type="text" className="AddCourse__input" {...register('courseName', {required: true})}/>
        </label>

        <label htmlFor="courseId" className="AddCourse__label">
          Course ID:
          <input type="text" className="AddCourse__input" {...register('courseId', {required: true})}/>
        </label>

        <label htmlFor="courseId" className="AddCourse__label">
          Course Faculty:
          <input type="text" className="AddCourse__input" {...register('courseFaculty', {required: true})}/>
        </label>

        <label htmlFor="courseId" className="AddCourse__label">
          Course Duration:
          <input type="number" className="AddCourse__input" min={1} max={48} {...register('courseDuration', {required: true})}/>
        </label>

        <label htmlFor="courseId" className="AddCourse__label">
          Course Summary:
          <textarea
            id="courseSummary"
            cols="30"
            rows="10"
            className="AddCourse__input"
            {...register('courseSummary', {required: true})}
          ></textarea>
        </label>

        <label htmlFor="courseName" className="AddCourse__label">
          Course Manager:

          <select className="AddCourse__input" {...register('courseManager', {required: true})}>
            <option value="">Select Course Manager</option>
            <option value="Ncube">Ncube</option>
          </select>
        </label>

        <label htmlFor="courseModule" className="AddCourse__label">
          Course Module:
          <div className="AddCourse__input-group">
            <input
              type="text"
              className="AddCourse__input AddCourse__input--addModule"
              name='courseModules'
              value={moduleName}
              onChange={(e) => {setModuleName(e.target.value)}}
            />

            <button
              className='AddCourse__btn'
              type='button'
              onClick={
                addCourseModules
              }
            >
              +
            </button>
          </div>
        </label>

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Course</button>
          <button type='button' className="AddCourse__addTopic">Add Modules</button>
        </div>
      </form>
    </section>
  )
}
