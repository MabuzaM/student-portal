'use client';
import React, { useEffect, useState } from 'react';
import './StudentRegistration.scss';
import bootstrap from 'bootstrap';
import { Course, Student } from '@/app/utils/types';
import axios from 'axios';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ky from 'ky';


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

  const [formData, setFormData] = useState({
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
  });

  const { register, handleSubmit, formState: { errors } } = useForm();
  const client = ky.create({ /* Optional: Create a pre-configured Ky instance*/  });

  const onSubmit = async (data: {}) => {
    try {
      const response = await client.post('http://127.0.0.1:5000/student/', { json: data });
      console.log(data);

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Error submitting form:', await response.text());
      }
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  return (
    <form
      className='StudentRegistration'
      onSubmit={handleSubmit(onSubmit)}
      method='post'
    >
      <h3>Student Registration</h3>

      <hr />

      <div className="StudentRegistration__row">
        <div className='StudentRegistration__field'>
          <label htmlFor="studName" className="StudentRegistration__label">Name:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text" 
              className="StudentRegistration__input"
              id="studName"
              {...register('studentName', {required: true})}
            />
            {errors.studentName && <div>{errors.studentName.message || "Name is required"}</div>}
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studSurname" className="StudentRegistration__label">Surname:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              id="studSurname"
              {...register('surname', {required: true})}
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
              id="studIdNumber"
              {...register('nationalId', {required: true})}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studDob" className="StudentRegistration__label">Date of Birth:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="date"
              className="StudentRegistration__input"
              id="studDob"
              {...register('dateOfBirth', {required: true})}
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
              id="studEmail"
              {...register('email', {required: true})}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studPhone" className="StudentRegistration__label">Phone Number:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="tel"
              className="StudentRegistration__input"
              id="studPhone"
              {...register('phone', {required: true})}
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
              id="studAddress1"
              {...register('address1', {required: true})}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="studAddress2" className="StudentRegistration__label">Address Line 2:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              id="studAddress2"
              {...register('address2', {required: true})}
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
              id="parentName"
              {...register('parentName', {required: true})}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="parentSurname" className="StudentRegistration__label">Surname:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="text"
              className="StudentRegistration__input"
              id="parentSurname"
              {...register('parentSurname', {required: true})}
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
              id="parentEmail"
              {...register('parentEmail', {required: true})}
            />
          </div>
        </div>

        <div className='StudentRegistration__field'>
          <label htmlFor="parentPhone" className="StudentRegistration__label">Phone Number:</label>
          <div className="StudentRegistration__form-control">
            <input
              type="tel"
              className="StudentRegistration__input"
              id="parentPhone"
              {...register('parentPhone', {required: true})}
            />
          </div>
        </div>
      </div>

      <label htmlFor="courseName"><h3>Course</h3></label>

      <select id="courseName" {...register('courseName', {required: true})}>
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
