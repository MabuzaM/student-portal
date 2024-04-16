import React, { useState } from "react";
import { Course } from "@/app/utils/types";
import './EmployeeRegistration.scss';
import axios from "axios";

export const EmployeeRegistration = ({courses = []}) => {
  const initialEmployeeDetails = {
    employeeName: "",
    employeeSurname: "",
    employeeDateOfBirth: "", 
    employeeNatId: "", 
    employeeGender: "",
    employeeMaritalStatus: "",
    employeePhone: "", 
    employeeAddress: "",
    employeeEmail: "", 
    employeePassword: "",
    employeeNumber: "",
    employeeJobTitle: "",
    employeeDepartment: "", 
    employeeCourses: [],
  }

  const [newEmployeeDetails, setnewEmployeeDetails] = useState({...initialEmployeeDetails});

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setnewEmployeeDetails((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  };

  const handleRegisterEmployer = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    axios.post(
      '/employee',
      newEmployeeDetails,
      {headers: {
        "Content-Type": "application/json/text/x-www-form-urlencoded", "Accept": "*/*"}}).then(() => {
      console.log("Employee created");
      alert('Success');
    }).catch((err) => {
      console.log("Can't create employee", err);
      alert('Failed to create');
    })
  }

  return (
    <form
      className="EmployeeRegistration"
      onSubmit={(e) => {handleRegisterEmployer(e)}}
      method="post"
      action={"#"}
    >
      <h3>Employee Registration</h3>

      <hr />

      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeName" className="EmployeeRegistration__label">Name:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text" 
              className="EmployeeRegistration__input" 
              name="employeeName"
              id="employeeName" 
              value={newEmployeeDetails.employeeName} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeSurname" className="EmployeeRegistration__label">Surname:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeSurname"
              id="employeeSurname"
              value={newEmployeeDetails.employeeSurname} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeDateOfBirth" className="EmployeeRegistration__label">Date Of Birth:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeDateOfBirth"
              id="employeeDateOfBirth"
              value={newEmployeeDetails.employeeDateOfBirth} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeNatId" className="EmployeeRegistration__label">National ID:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeNatId"
              id="employeeNatId"
              value={newEmployeeDetails.employeeNatId} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="EmployeeRegistration__row">
        <label htmlFor="employeeGender">Gender</label>

        <select name="employeeGender" id="employeeGender" value={newEmployeeDetails.employeeGender} onChange={handleInputChange}>
          <option defaultValue={''}>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="employeeMaritalStatus">Marital Status</label>

        <select name="employeeMaritalStatus" id="employeeMaritalStatus" value={newEmployeeDetails.employeeMaritalStatus} onChange={handleInputChange}>
          <option defaultValue={''}>Select your marital status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>
      </div>
      
      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeePhone" className="EmployeeRegistration__label">Phone Number:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeePhone"
              id="employeePhone"
              value={newEmployeeDetails.employeePhone} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeAddress" className="EmployeeRegistration__label">Address:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeAddress"
              id="employeeAddress"
              value={newEmployeeDetails.employeeAddress} 
              onChange={handleInputChange}
              />
          </div>
        </div>
      </div>

      <h3>Login Credentials</h3>

      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeEmail" className="EmployeeRegistration__label">Email Address:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeEmail"
              id="employeeEmail"
              value={newEmployeeDetails.employeeEmail} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeePassword" className="EmployeeRegistration__label">Password:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeePassword"
              id="employeePassword"
              value={newEmployeeDetails.employeePassword} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <h3>Employment Details</h3>

      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeJobTitle" className="EmployeeRegistration__label">Job Title:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeJobTitle"
              id="employeeJobTitle"
              value={newEmployeeDetails.employeeJobTitle} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeDepartment" className="EmployeeRegistration__label">Department:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              name="employeeDepartment"
              id="employeeDepartment"
              value={newEmployeeDetails.employeeDepartment} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <label htmlFor="employeeCourses"><h3>For Academic employee Only</h3></label>

      <select name="employeeCourses" id="employeeCourses" value={newEmployeeDetails.employeeCourses} multiple onChange={handleInputChange}>
        <option defaultValue={''}>Select your courses</option>
        {courses.map((course: Course) =>{
          const { courseId} = course
          return (
            <option
              key={courseId}
            >
              {course.courseName}
            </option>)
        })}
      </select>

    <button
      type="submit"
      className="EmployeeRegistration__submit"
    >Register
    </button>
  </form>
  )
}
