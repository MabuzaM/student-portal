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

        <label htmlFor="topicLessonNotesExtLinks" className="AddCourse__label">
          External Links:
          <input type="text" id='topicLessonNotesExtLinks' className="AddCourse__input" placeholder='Enter external links, separated by a space'{...register('topicLessonNotesExtLinks', {required: true})}/>
        </label>

        <label htmlFor="topicLessonVideoLink" className="AddCourse__label">
          Video Link:
          <input type="text" id='topicLessonVideoLink' className="AddCourse__input" placeholder='Enter a video link'{...register('topicLessonVideoLink', {required: true})}/>
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Lesson Task:
          <select id="lessonLinks" className="AddCourse__input" {...register('lessonLinks', {required: true})}>
            <option value="" disabled selected>Select Task Type</option>
              <option value='short'>Short Tasks</option>
              <option value='short'>Long Tasks</option>
          </select>
        </label>

        <label htmlFor="taskQuestion" className="AddCourse__label">
          Question:
          <input type="text" id='taskQuestion' className="AddCourse__input" placeholder='Enter a question'{...register('taskQuestion', {required: true})}/>
        </label>

        <label htmlFor="taskAnswerOptions" className="AddCourse__label">
          Options:
          <input type="text" id='taskAnswerOptions' className="AddCourse__input" placeholder='Enter options to choose from, separated by a space'{...register('taskAnswerOptions', {required: true})}/>
        </label>

        <label htmlFor="correctOptions" className="AddCourse__label">
          Correct Options:
          <input type="text" id='correctOptions' className="AddCourse__input" placeholder='Enter correct option(s) separated by a space'{...register('correctOptions', {required: true})}/>
        </label>

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Lesson</button>
          <button type='button' className="AddCourse__addTopic">Update Lesson</button>
        </div>
      </form>
    </section>
  )
}
