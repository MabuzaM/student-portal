import react, { useEffect, useState } from 'react';
import './AddLesson.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule } from '@/app/utils/types';

export const AddLesson = ({courses = []}) => {
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

  // const addCourseModules = () => {
  //   setCourseModules([...courseModules, {
  //     lessonLinks: lessonLinks,
  //     moduleName: '',
  //     moduleTutor: '',
  //     moduleProgress: 0,
  //     lessonNotes: '',
  //     moduleTopics: []
  //   }])

  //   setlessonLinks('');
  // }

  // console.log(lessonLinks)
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
      <h2 className="AddCourse__heading">Add Lessons</h2>

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

        <label htmlFor="moduleName" className="AddCourse__label">
          Topic:
          <input type="search" name="topicSearch" id="topicSearch" className="AddCourse__input" placeholder='Search Topic'/>
          {
            <select id="lessonLinks" className="AddCourse__input" {...register('lessonLinks', {required: true})}>
              <option value="" disabled selected>Select Topic</option>
              {
                courseModules.map((courseModule) => (
                  courseModule.moduleTopics.map((moduleTopic) => (
                    moduleTopic.topicLessons.map((topicLesson) => (
                      <option value={topicLesson.topicLessonTitle} key={topicLesson.topicLessonTitle}>
                        {topicLesson.topicLessonTitle}
                      </option>
                    ))
                  ))
                ))
              }
            </select>
          }
        </label>

        <label htmlFor="lessonLinks" className="AddCourse__label">
          Lesson Title:
          <input type="text" id='lessonLinks' className="AddCourse__input" {...register('lessonLinks', {required: true})}/>
        </label>
{/* 
        <label htmlFor="moduleId" className="AddCourse__label">
          Module ID:
          <input type="text" id='moduleId' className="AddCourse__input" {...register('moduleId', {required: true})}/>
        </label> */}

        {/* <label htmlFor="moduleTutor" className="AddCourse__label">
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
        </label> */}

        <label htmlFor="lessonNotes" className="AddCourse__label">
          Lesson Notes:
          <textarea
            id="lessonNotes"
            cols="30"
            rows="10"
            className="AddCourse__input"
            {...register('lessonNotes', {required: true})}
          ></textarea>
        </label>

        <label htmlFor="lessonLinks" className="AddCourse__label">
          External Links:
          <input type="text" id='lessonLinks' className="AddCourse__input" placeholder='Enter external links, separated by a space'{...register('lessonLinks', {required: true})}/>
        </label>

        <label htmlFor="lessonLinks" className="AddCourse__label">
          Video Link:
          <input type="text" id='lessonLinks' className="AddCourse__input" placeholder='Enter a video'{...register('lessonLinks', {required: true})}/>
        </label>

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Topic</button>
          <button type='button' className="AddCourse__addTopic">Add Lessons</button>
        </div>
      </form>
    </section>
  )
}
