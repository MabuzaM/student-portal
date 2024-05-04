export type LessonTask = {
  lessonTaskGrade: number,
  lessonTaskType: string,
  lessonTaskQuestion: string,
  lessonTaskAnswerOptions: string[],
  lessonTaskCorrectAnswers: string[]
}

export type TopicLesson = {  
  topicLessonTitle: string,
  topicLessonVideoLink: string[],
  topicLessonNotes: string,
  topicLessonExtLinks: string[],
  topicLessonProgress: number,
  topicLessonTasks: LessonTask[]
}

export type ModuleTopic = {  
  topic: string,
  topicProgress: number,
  topicLessons: TopicLesson[],
  topicNotes?: object
}

export type CourseModule = {  
  moduleId: string,
  moduleName: string,
  moduleInstructor: string,
  moduleTutor: string,
  moduleProgress: number,
  moduleSummary: string,
  moduleTopics: ModuleTopic[]
}

export type Lesson = {
  lesson_number: number,
  lesson_time: string,
  subject: string,
  teacher: string,
  classroom: string
}

export type Timetable = {
  day: string,
  lessons: Lesson[]
}

export type Course = {
  courseId: string,
  courseName: string,
  courseSummary: string,
  courseDuration: number,
  courseManager: string,
  courseModules: CourseModule[],
  courseFaculty: string,
  courseProgress: number,
  courseTimetable: Timetable[]
}

export type Attendance = {
  module: string,
  time: string,
  attendance: string
}

export type Student = {
  studentName: string,
  surname: string,
  courseName: string,
  studentNumber: string,
  phone: string,
  address1: string,
  address2: string,
  email: string,
  nationalId: string,
  dateOfBirth: Date,
  parentSurname: string,
  parentName: string,
  parentPhone: string,
  parentEmail: string,
}

export type Assessment = {
  module: string,
  assignment: number,
  test: number,
  internal_exam: number
}

export type Employee = {
  employeeName: string,
  employeeSurname: string,
  employeeDateOfBirth: Date, 
  employeeNatId: string, 
  employeeGender: string,
  employeeMaritalStatus: string,
  employeePhone: string, 
  employeeAddress: string,
  employeeEmail: string, 
  employeePassword: string,
  employeeNumber: string,
  employeeJobTitle: string,
  employeeDepartment: string, 
  employeeCourses: string[]
}
