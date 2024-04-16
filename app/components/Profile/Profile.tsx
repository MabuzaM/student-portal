'use client';
import React, { useEffect, useState } from 'react';
import './Profile.scss';
import Image from 'next/image';
import profile_picture from './assets/profilePicture.png';
import axios from 'axios';
import { Student } from '@/app/utils/types';

export const Profile = () => {
  const [student, setStudent] = useState<Student>();

  // useEffect (() => {
  //   axios.get('http://localhost:3001/getStudent')
  //   .then((student) => {
  //     setStudent(student.data)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])
  return (
    <article className="Profile">
      <div className="Profile_photoBG">
        <Image
          src={profile_picture}
          alt="profile"
          width={200}
          className="Profile_photo"
        />
      </div>

      <div className="Profile_info">
        {/* <p>{student?.student_id}</p>
        <p>{student?.name} {student?.surname}</p>
        <p>{student?.course}</p>
        <p>{student?.level}</p> */}
        <p>Faculty of Information and Communication Technology</p>
      </div>
    </article>
  );
};
