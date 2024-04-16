const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  studentName: String,
  surname: String,
  courseName: String,
  phone: String,
  address1: String,
  address2: String,
  email: String,
  nationalId: String,
  dateOfBirth: String,
  parentSurname: String,
  parentName: String,
  parentPhone: String,
  parentEmail: String,
});

const StudentsModel = new mongoose.model("students", StudentsSchema);
module.exports = StudentsModel;
