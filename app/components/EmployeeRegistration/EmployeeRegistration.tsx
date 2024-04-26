import React, { useState } from "react";
import { Course } from "@/app/utils/types";
import './EmployeeRegistration.scss';
import axios from "axios";
import { Form, useForm } from "react-hook-form";
import ky from "ky";

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

  const { register, handleSubmit, formState: {errors} } = useForm();
  const client = ky.create({});


  const onSubmit = async (data: {}) => {
    try {
      const response = await client.post('http://127.0.0.1:5000/employee/', { json: data });
      console.log(data);
      data = {...initialEmployeeDetails}
      if (response.ok) {
        console.log('Employee data successfully saved!');
      } else {
        console.log('Error submitting employee data!', await response.text());
      }
    } catch (error) {
      console.log('Error making the request', error);
    }
  };

  return (
    <form
      className="EmployeeRegistration"
      onSubmit={handleSubmit(onSubmit)}
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
              id="employeeName" 
              {...register('employeeName', {required: true})}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeSurname" className="EmployeeRegistration__label">Surname:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              id="employeeSurname"
              {...register('employeeSurname', {required: true})}
            />
          </div>
        </div>
      </div>

      <div className="EmployeeRegistration__row">
        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeDateOfBirth" className="EmployeeRegistration__label">Date Of Birth:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="date"
              className="EmployeeRegistration__input"
              id="employeeDateOfBirth"
              {...register('employeeDateOfBirth', {required: true})}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeNatId" className="EmployeeRegistration__label">National ID:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              id="employeeNatId"
              {...register('employeeNatId', {required: true})}
            />
          </div>
        </div>
      </div>

      <div className="EmployeeRegistration__row">
        <label htmlFor="employeeGender">Gender</label>

        <select id="employeeGender" {...register('employeeGender', {required: true})}>
          <option defaultValue={''}>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="employeeMaritalStatus">Marital Status</label>

        <select id="employeeMaritalStatus" {...register('employeeMaritalStatus', {required: true})}>
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
              id="employeePhone"
              {...register('employeePhone', {required: true})}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeAddress" className="EmployeeRegistration__label">Address:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              id="employeeAddress"
              {...register('employeeAddress', {required: true})}
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
              type="email"
              className="EmployeeRegistration__input"
              id="employeeEmail"
              {...register('employeeEmail', {required: true})}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeePassword" className="EmployeeRegistration__label">Password:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              id="employeePassword"
              {...register('employeePassword', {required: true})}
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
              id="employeeJobTitle"
              {...register('employeeJobTitle', {required: true})}
            />
          </div>
        </div>

        <div className="EmployeeRegistration__field">
          <label htmlFor="employeeDepartment" className="EmployeeRegistration__label">Department:</label>
          <div className="EmployeeRegistration__form-control">
            <input
              type="text"
              className="EmployeeRegistration__input"
              id="employeeDepartment"
              {...register('employeeDepartment', {required: true})}
            />
          </div>
        </div>
      </div>

      <label htmlFor="employeeCourses"><h3>For Academic employee Only</h3></label>

      <select id="employeeCourses" {...register('employeeCourses', {required: true})}>
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
