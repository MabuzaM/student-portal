'use client';
import React, { useEffect, useState } from 'react';
import './StudentRegistration.scss';
import bootstrap from 'bootstrap';
import { Course, Student } from '@/app/utils/types';
import axios from 'axios';


export const StudentRegistration = ({courses = []}) => {
  const initialStudentData = {
    studentName: '',
    surname: '',
    courseName: '',
    phone: '',
    address1: '',
    address2: '',
    email: '',
    nationalId: '',
    dateOfBirth: '',
    parentSurname: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
  };

  const [formData, setFormData] = useState({...initialStudentData});

  const handleRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const jsonStringFormData = JSON.stringify(formData);

    try {
      
     await axios.post('/student',
        {...formData},
        {headers: {
          'Content-Type': 'application/json/text', // Set the content type
        }});
      alert('Student successfully added');

    } catch (err) {
      alert('Failed to register student');
      console.error('Error creating student',err);
    }
  };

  const handleInputChange = async (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className='StudentRegistration'
      onSubmit={handleRegister}
      method='post'
      action={'http://localhost:3001/api/student'}>
      <h3>Student Registration</h3>

      <hr />

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="studName" className="StudentRegistration__label">Name:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text" 
              className="StudentRegistration__input" 
              name="studentName"
              id="studName" 
              value={formData.studentName} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studSurname" className="StudentRegistration__label">Surname:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="surname"
              id="studSurname"
              value={formData.surname} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="studIdNumber" className="StudentRegistration__label">ID Number:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="nationalId"
              id="studIdNumber"
              value={formData.nationalId} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studDob" className="StudentRegistration__label">Date of Birth:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="date"
              className="StudentRegistration__input"
              name="dateOfBirth"
              id="studDob"
              value={formData.dateOfBirth} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="studEmail" className="StudentRegistration__label">Email:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="email"
              className="StudentRegistration__input"
              name="email"
              id="studEmail"
              value={formData.email} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studPhone" className="StudentRegistration__label">Phone Number:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="tel"
              className="StudentRegistration__input"
              name="phone"
              id="studPhone"
              value={formData.phone} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      
      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="studAddress1" className="StudentRegistration__label">Address Line1:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="address1"
              id="studAddress1"
              value={formData.address1} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studAddress2" className="StudentRegistration__label">Address Line 2:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="address2"
              id="studAddress2"
              value={formData.address2} 
              onChange={handleInputChange}
              />
          </div>
        </div>
      </div>

      <h3>Parent / Guardian Details</h3>

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="parentName" className="StudentRegistration__label">Name:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="parentName"
              id="parentName"
              value={formData.parentName} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="parentSurname" className="StudentRegistration__label">Surname:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              name="parentSurname"
              id="parentSurname"
              value={formData.parentSurname} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="parentEmail" className="StudentRegistration__label">Email:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="email"
              className="StudentRegistration__input"
              name="parentEmail"
              id="parentEmail"
              value={formData.parentEmail} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="parentPhone" className="StudentRegistration__label">Phone Number:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="tel"
              className="StudentRegistration__input"
              name="parentPhone"
              id="parentPhone"
              value={formData.parentPhone} 
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <label htmlFor="courseName"><h3>Course</h3></label>

      <select name="courseName" id="courseName" value={formData.courseName} onChange={handleInputChange}>
        <option defaultValue={''}>Select your prefered course</option>
        {courses.map((course: Course) =>{
          const { courseId} = course
          return (
            <option
              value={course.courseName}
              key={courseId}
            >
              {course.courseName}
            </option>)
        })}
      </select>

      <button
        type="submit"
        className="StudentRegistration__submit"
      >Register
      </button>
    </form>
  )
}
