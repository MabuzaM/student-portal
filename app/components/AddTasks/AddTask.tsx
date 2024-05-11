import react, { useEffect, useState } from 'react';
import './AddTask.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, LessonTask, TopicLesson } from '@/app/utils/types';

export const AddTask = ({courses = []}) => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});
  const [feedback, setFeedback] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [selectedModule, setSelectedModule] = useState<CourseModule>();
  const [selectedTopicName, setSelectedTopicName] = useState('');
  const [selectedLessonTitle, setSelectedLessonTitle] = useState('');
  const [selectedTopicLesson, setSelectedTopicLesson] = useState<TopicLesson>();

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

  const handleLessonChange = (e) => {
    setSelectedLessonTitle(e.target.value);
  }

  const onSubmit = async (data: {}) => {
    try {
      const newLesson = {
        ...data,
        moduleId: selectedModule?.moduleId,
        topic: selectedTopicName,
        topicLessonTitle: selectedLessonTitle,
        lessonTaskGrade: 0,
        lessonTaskAnswerOptions: (data?.lessonTaskAnswerOptions).split(';'),
        lessonTaskCorrectAnswers: (data?.lessonTaskCorrectAnswers).split(';')
      }

      console.log(newLesson);

      const response = await client.patch(`http://127.0.0.1:5000/addTasks/${selectedCourse?._id}`, { json: newLesson });

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
      <h2 className="AddCourse__heading">Add Tasks</h2>

      <form className="AddCourse__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="courseName" className="AddCourse__label">
          Select a Course:

          <select id="courseName" className="AddCourse__input" onChange={handleCourseChange}>
            <option value="" disabled selected>Select a Course</option>
            {
              courses.map((course: Course) => {
                
                return <option value={course.courseName} key={course._id.toString()}>{course.courseName}</option>
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
                  <option value={courseModule.moduleId} key={courseModule._id.toString()}>
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
          Lesson:
          {
            <select id="moduleTopic" className="AddCourse__input" onChange={handleLessonChange}>
              <option disabled value={''} selected>{'Select a Lesson'}</option>
              {
                selectedModule?.moduleTopics?.find((moduleTopic) => moduleTopic.topic === selectedTopicName)?.topicLessons.map((topiclesson) => (
                  <option value={topiclesson.topicLessonTitle} key={topiclesson._id.toString()}>
                    {topiclesson.topicLessonTitle}
                  </option>
                ))
 
              }
            </select>
          }
        </label>

        <label htmlFor="moduleName" className="AddCourse__label">
          Lesson Task:
          <select id="lessonTaskType" className="AddCourse__input" {...register('lessonTaskType', {required: true})}>
            <option value="" disabled selected>Select Task Type</option>
              <option value='short'>Short Tasks</option>
              <option value='long'>Long Tasks</option>
          </select>
        </label>

        <label htmlFor="lessonTaskQuestion" className="AddCourse__label">
          Question:
          <input type="text" id='lessonTaskQuestion' className="AddCourse__input" placeholder='Enter a question'{...register('lessonTaskQuestion', {required: true})}/>
        </label>

        <label htmlFor="lessonTaskAnswerOptions" className="AddCourse__label">
          Options:
          <input type="text" id='lessonTaskAnswerOptions' className="AddCourse__input" placeholder='Enter options to choose from, separated by a space'{...register('lessonTaskAnswerOptions', {required: true})}/>
        </label>

        <label htmlFor="lessonTaskCorrectAnswers" className="AddCourse__label">
          Correct Options:
          <input type="text" id='lessonTaskCorrectAnswers' className="AddCourse__input" placeholder='Enter correct option(s) separated by a space'{...register('lessonTaskCorrectAnswers', {required: true})}/>
        </label>

        {
          feedback && (
            <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
              {feedback}
            </p>
          )
        }

        <div className="AddCourse__button-group">
          <button type='submit' className="AddCourse__submit">Save Lesson Task</button>
          <button type='button' className="AddCourse__addTopic">Update Lesson Task</button>
        </div>
      </form>
    </section>
  )
}
