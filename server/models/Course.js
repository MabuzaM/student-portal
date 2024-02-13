const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  course_id: String,
  course_name: String,
  course_summary: String,
  course_duration: Number,
  course_instructor: String,
  course_topics: Array,
});

const CourseModel = new mongoose.model("students_portal", CourseSchema);
module.exports = CourseModel;
