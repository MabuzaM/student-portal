const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentName: {
    type: String, required: true
  },
  surname: {
    type: String, required: true
  },
  courseName: {
    type: String, required: true
  },
  phone: {
    type: String, required: true
  },
  address1: {
    type: String, required: true
  },
  address2: {
    type: String, required: true
  },
  email: {
    type: String, required: true
  },
  nationalId: {
    type: String, required: true
  },
  dateOfBirth: {
    type: Date, required: true
  },
  parentSurname: {
    type: String, required: true
  },
  parentName: {
    type: String, required: true
  },
  parentPhone: {
    type: String, required: true
  },
  parentEmail: {
    type: String, required: true
  },
});

const StudentModel = new mongoose.model("students", StudentSchema);
module.exports = StudentModel;
