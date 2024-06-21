import react, { useEffect, useState } from 'react';
import './AddTask.scss';
import ky from 'ky';
import { useForm } from 'react-hook-form';
import { Course, CourseModule, Employee, LessonTask, TopicLesson } from '@/app/utils/types';
import { AsideMenu } from '../Asidemenu/AsideMenu';

interface AddTaskProps {
  courses: Course[],
  staff: Employee
}

export const AddTask: React.FC<AddTaskProps> = ({courses, staff}) => {
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
    <section className="AddTask">
      {staff && (<AsideMenu />)}

      <div className="AddTask__wrapper">
        <h2 className="AddTask__heading">Add Tasks</h2>

        <form className="AddTask__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="courseName" className="AddTask__label">
            Select a Course:

            <select id="courseName" className="AddTask__input" onChange={handleCourseChange}>
              <option value="" disabled selected>Select a Course</option>
              {
                courses.map((course: Course) => {
                  
                  return <option value={course.courseName} key={course._id.toString()}>{course.courseName}</option>
                })
              }
              
            </select>
          </label>

          <label htmlFor="moduleName" className="AddTask__label">
            Module:

            {
              <select id="moduleName" className="AddTask__input" onChange={handleModuleChange}>
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

          <label htmlFor="noduleTopic" className="AddTask__label">
            Topic:
            {
              <select id="moduleTopic" className="AddTask__input" onChange={handleTopicChange}>
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

          <label htmlFor="topicLessonTitle" className="AddTask__label">
            Lesson:
            {
              <select id="moduleTopic" className="AddTask__input" onChange={handleLessonChange}>
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

          <label htmlFor="moduleName" className="AddTask__label">
            Lesson Task:
            <select id="lessonTaskType" className="AddTask__input" {...register('lessonTaskType', {required: true})}>
              <option value="" disabled selected>Select Task Type</option>
                <option value='short'>Short Tasks</option>
                <option value='long'>Long Tasks</option>
            </select>
          </label>

          <label htmlFor="lessonTaskQuestion" className="AddTask__label">
            Question:
            <input type="text" id='lessonTaskQuestion' className="AddTask__input" placeholder='Enter a question'{...register('lessonTaskQuestion', {required: true})}/>
          </label>

          <label htmlFor="lessonTaskAnswerOptions" className="AddTask__label">
            Options:
            <input type="text" id='lessonTaskAnswerOptions' className="AddTask__input" placeholder='Enter options to choose from, separated by a space'{...register('lessonTaskAnswerOptions', {required: true})}/>
          </label>

          <label htmlFor="lessonTaskCorrectAnswers" className="AddTask__label">
            Correct Options:
            <input type="text" id='lessonTaskCorrectAnswers' className="AddTask__input" placeholder='Enter correct option(s) separated by a space'{...register('lessonTaskCorrectAnswers', {required: true})}/>
          </label>

          {
            feedback && (
              <p className={`Feedback ${submitError ? 'Feedback__error' : 'Feedback__success'}`}>
                {feedback}
              </p>
            )
          }

          <div className="AddTask__button-group">
            <button type='submit' className="AddTask__submit">Save Lesson Task</button>
            <button type='button' className="AddTask__addTopic">Update Lesson Task</button>
          </div>
        </form>
      </div>
    </section>
  )
}
