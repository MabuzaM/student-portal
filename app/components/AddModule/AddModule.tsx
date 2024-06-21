import react, { useState } from 'react';
import './AddModule.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, Employee } from '@/app/utils/types';
import { NavLink } from 'react-router-dom';
import { AsideMenu } from '../Asidemenu/AsideMenu';

interface AddmoduleProps {
  courses: Course[],
  employees: Employee[],
  staff: Employee
}

export const AddModule: React.FC<AddmoduleProps> = ({courses, employees, staff}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [courseId, setCourseId] = useState('');

  // const AddModuleModules = () => {
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

  const onSubmit = async (data: {}) => {
    try {
      const newModule = {...data, 
        moduleProgress: 0,
        moduleTopics: []
      }
      const response = await client.patch(`http://127.0.0.1:5000/addModules/${selectedCourse?._id}`, { json: newModule });
      console.log(response);

      if (response.ok) {
        setFeedback('Module successfully saved!');
      } else {
        setSubmitError(true);
        setFeedback(`Error saving the module! ${await response.text()}`);
      }
    } catch (error) {
      setSubmitError(true);
      setFeedback(`Error making the request ${error}`);
    }
  }

  return (
    <section className="AddModule">
      {staff && (<AsideMenu />)}

      <div className="AddModule__wrapper">
        <h2 className="AddModule__heading">Add Modules</h2>

        <form className="AddModule__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="courseName" className="AddModule__label">
            Select a Course:

            <select id="courseName" className="AddModule__input" hidden onChange={(e) => {
              setSelectedCourse(courses.find((course: Course) => course.courseId === e.target.value))
            }}>
              <option value="" disabled selected>Select a Course</option>
              {
                courses.map((course: Course) => 
                  <option value={course.courseId}>{course.courseName}</option>
                )
              }
              
            </select>
          </label>

          <label htmlFor="moduleName" className="AddModule__label">
            Module Name:
            <input type="text" id='moduleName' className="AddModule__input" {...register('moduleName', {required: true})}/>
          </label>

          <label htmlFor="moduleId" className="AddModule__label">
            Module ID:
            <input type="text" id='moduleId' className="AddModule__input" {...register('moduleId', {required: true})}/>
          </label>

          <label htmlFor="moduleInstructor" className="AddModule__label">
            Select Instructor:

            <select id="moduleInstructor" className="AddModule__input" {...register('moduleInstructor', {required: true})}>
              <option value="" defaultValue={''}>Select Instructor</option>
              {
                employees.map((employee: Employee) => (
                  employee.employeeJobTitle === 'Teacher' && <option value={employee.employeeName}>
                    { employee.employeeName}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="moduleTutor" className="AddModule__label">
            Select Tutor:

            <select id="moduleTutor" className="AddModule__input AddModule__input--select" {...register('moduleTutor', {required: true})}>
              <option value="" defaultValue={''}>Select Tutor</option>
              {
                employees.map((employee: Employee) => (
                  employee.employeeJobTitle == 'Teacher' && <option value={employee.employeeName}>
                    {employee.employeeName}
                  </option>
                ))
              }
            </select>
          </label>

          <label htmlFor="moduleSummary" className="AddModule__label">
            Module Summary:
            <textarea
              id="moduleSummary"
              cols="30"
              rows="10"
              className="AddModule__input"
              {...register('moduleSummary', {required: true})}
            ></textarea>
          </label>
        
          {
            feedback && (
              <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
                {feedback}
              </p>
            )
          }

          <div className="AddModule__button-group">
            <button type='submit' className="AddModule__submit">Save Module</button>
            <NavLink to={'/topics'}><button type='button' className="AddModule__addTopic">Add Topics</button></NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}
