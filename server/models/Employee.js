const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeName: String,
  employeeSurname: String,
  employeeDateOfBirth: String, 
  employeeNatId: String, 
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
