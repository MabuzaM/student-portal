import React, { useEffect, useState } from 'react';
import { Course, Student, Employee } from '@/app/utils/types';

import './CourseInfo.scss';

interface CourseInfoProps {
  courses: Course[];
  user: Student;
}

export const CourseInfo: React.FC<CourseInfoProps> = ({courses, user}) => {
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    setCourse(courses?.find((course: Course) => course.courseName === user?.courseName))
  }, []);

  return (
    <article className="CourseInfo">
      <h4 className="CourseInfo__title">Title: {course?.courseName}</h4>
      <h4 className="CourseInfo__instructor">Manager: {course?.courseManager}</h4>
      <h4 className="CourseInfo__progress">Progress: {course?.courseProgress}</h4>
      <p className="CourseInfo__description">{course?.courseSummary}</p>

    </article>
  )
}