const mongoose = require('mongoose');

const AssessmentsSchema = new mongoose.Schema({
  module: String,
  assignment: Number,
  test: Number,
  internal_exam: Number,
});

const AssessmentsModel = new mongoose.model("assessments", AssessmentsSchema);
module.exports = AssessmentsModel;
