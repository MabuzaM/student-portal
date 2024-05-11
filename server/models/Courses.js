const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  courseName: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  courseSummary: String,
  courseProgress: Number,
  courseDuration: Number,
  courseManager: String,
  courseModules: [{
    moduleName: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    moduleId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    moduleInstructor: String,
    moduleTutor: String,
    moduleProgress: Number,
    moduleSummary: String,
    moduleTopics: [{
      topic: {
        type: String,
        required: true,
        unique: true,
        index: true
      },
      topicProgress: Number,
      topicLessons: [{
        topicLessonTitle: {
          type: String,
          required: true,
          unique: true,
          index: true
        },
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
