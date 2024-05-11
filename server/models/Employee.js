const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
    length: 30,
  },
  employeeSurname: {
    type: String,
    required: true,
  },
  employeeDateOfBirth: {
    type: Date,
    required: true,
  }, 
  employeeNatId: String, 
  role: String,
  employeeGender: String,
  employeeMaritalStatus: String,
  employeePhone: String, 
  employeeAddress: String,
  employeeEmail: String, 
  employeePassword: String,
  employeeNumber: String,
  employeeJobTitle: String,
  employeeDepartment: String, 
  employeeCourses: Array
})

const EmployeeModel = new mongoose.model('employees', EmployeeSchema);
module.exports = EmployeeModel;
