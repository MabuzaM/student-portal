const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentPhoto: {
    type: String, required: true
  },
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
    type: String, required: true, unique: true
  },
  nationalId: {
    type: String, required: true, unique: true
  },
  studentNumber: {
    type: String, required: true, unique: true
  },
  password: {
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
  role: String,
});

const StudentModel = new mongoose.model("students", StudentSchema);
module.exports = StudentModel;
