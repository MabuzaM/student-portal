export type TopicLesson = {  
  topicLessonTitle: string,
  topicVideoLink: string
}

export type ModuleTopic = {  
  topic: string,
  topicProgress: number,
  topicLessons: TopicLesson[],
  topicNotes?: object
}

export type CourseModule = {  
  moduleName: string,
  moduleInstructor: string,
  moduleTutor: string,
  moduleProgress: number,
  moduleSummary: string,
  moduleTopics: ModuleTopic[]
}

export type Course = {
  courseId: string,
  courseName: string,
  courseSummary: string,
  courseDuration: number,
  courseManager: string,
  courseModules: CourseModule[],
  courseFaculty: string
}

export type Attendance = {
  module: string,
  time: string,
  attendance: string
}

export type Student = {
    name: string,
    surname: string,
    course: string,
    phone: string,
    address: string,
    email: string,
    parent: string,
    student_id: string,
    level: string,
    date_of_birth: Date,
    password: string,
    picture: string
}

export type Assessment = {
  module: string,
  assignment: number,
  test: number,
  internal_exam: number
}
