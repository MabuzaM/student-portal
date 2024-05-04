const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  courseName: {
    type: String,
    required: true,
    unique: true
  },
  courseSummary: String,
  courseDuration: Number,
  courseManager: String,
  courseModules: [{
    moduleName: String,
    moduleId: String,
    moduleInstructor: String,
    moduleTutor: String,
    moduleProgress: Number,
    moduleSummary: String,
    moduleTopics: [{
      topic: String,
      topicProgress: Number,
      topicLessons: [{
        topicLessonTitle: String,
        topicLessonVideoLink: [String],
        topicLessonNotes: String,
        topicLessonExtLinks: [String],
        topicLessonProgress: Number,
        topicLessonTasks: [{
          lessonTaskGrade: Number,
          lessonTaskType: String,
          lessonTaskQuestion: String,
          lessonTaskAnswerOptions: [String],
          lessonTaskCorrectAnswers: [String]
        }]
      }]
    }]
  }],
  courseFaculty: String,
  courseProgress: Number,
  courseTimetable: Array,
});

const CourseModel = new mongoose.model("courses", CourseSchema);
module.exports = CourseModel;
