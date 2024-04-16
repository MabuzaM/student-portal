const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  courseSummary: String,
  courseDuration: Number,
  courseManager: String,
  courseModules: Array,
  courseFaculty: String,
  courseProgress: Number,
  courseTimetable: Array,
});

const CourseModel = new mongoose.model("courses", CourseSchema);
module.exports = CourseModel;
