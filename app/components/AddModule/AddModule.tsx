import react, { useState } from 'react';
import './AddModule.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, Employee } from '@/app/utils/types';

export const AddModule = ({courses = [], employees = []}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [courseModules, setCourseModules] = useState<CourseModule[]>([]);
  const [moduleName, setModuleName] = useState('');

  // const addCourseModules = () => {
  //   setCourseModules([...courseModules, {
  //     moduleName: moduleName,
  //     moduleInstructor: '',
  //     moduleTutor: '',
  //     moduleProgress: 0,
  //     moduleSummary: '',
  //     moduleTopics: []
  //   }])

  //   setModuleName('');
  // }

  // console.log(moduleName)
  // console.log(courseModules)

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
      <h2 className="AddCourse__heading">Add Modules</h2>

      <form className="AddCourse__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="courseName" className="AddCourse__label">
          Select a Course:

          <select id="courseName" className="AddCourse__input" {...register('courseName', {required: true})} hidden>
            <option value="" disabled selected>Select a Course</option>
            {
              courses.map((course: Course) => (
                <option value={course.courseName}>{course.courseName}</option>
              ))
            }
            
          </select>
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Module Name:
          <input type="text" id='moduleName' className="AddCourse__input" {...register('moduleName', {required: true})}/>
        </label>

        <label htmlFor="moduleId" className="AddCourse__label">
          Module ID:
          <input type="text" id='moduleId' className="AddCourse__input" {...register('moduleId', {required: true})}/>
        </label>

        <label htmlFor="moduleInstructor" className="AddCourse__label">
          Select Instructor:

          <select id="moduleInstructor" className="AddCourse__input" {...register('moduleInstructor', {required: true})}>
            <option value="" disabled selected>Select Instructor</option>
            {
              employees.map((employee: Employee) => (
                <option value={employee.employeeName}>
                  {employee.employeeJobTitle == 'Teacher' && employee.employeeName}
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="moduleTutor" className="AddCourse__label">
          Select Tutor:

          <select id="moduleTutor" className="AddCourse__input" {...register('moduleTutor', {required: true})}>
            <option value="" disabled selected>Select Tutor</option>
            {
              employees.map((employee: Employee) => (
                <option value={employee.employeeName}>
                  {employee.employeeJobTitle == 'Teacher' && employee.employeeName}
                </option>
              ))
            }
          </select>
        </label>

        <label htmlFor="moduleSummary" className="AddCourse__label">
          Module Summary:
          <textarea
            id="moduleSummary"
            cols="30"
            rows="10"
            className="AddCourse__input"
            {...register('moduleSummary', {required: true})}
          ></textarea>
        </label>

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Module</button>
          <button type='button' className="AddCourse__addTopic">Add Topics</button>
        </div>
      </form>
    </section>
  )
}
