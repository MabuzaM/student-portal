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
  courseModules: Array,
  courseFaculty: String,
  courseProgress: Number,
  courseTimetable: Array,
});

const CourseModel = new mongoose.model("courses", CourseSchema);
module.exports = CourseModel;
